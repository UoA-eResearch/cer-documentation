'use strict';

const ID_STEPS = document.getElementById('steps')
/**
 *          Local Storage
 * =======================================
 */
const locStorage = window.localStorage;
const pageKey = `progress_${ID_STEPS.getAttribute('label')}`;

function save_progress(index){
  locStorage.setItem(pageKey, index);
}

function get_progress(){
  var v = locStorage.getItem(pageKey);
  return v ? parseInt(v) : 0;
}

/**
 *          Animation functions
 * =======================================
 */
const LTR = document.body.getAttribute("dir").toLowerCase() == "ltr";

function right(){return LTR? 'right' : 'left';}

function left(){return LTR? 'left' : 'right';}

function is_transitioning(element, transName){
  //element.style.transition = q;
  element.setAttribute('animating', transName);
}

function end_transition(element, duration){
  setTimeout((function(){
    element.removeAttribute('animating');
    ID_STEPS.scrollTo(0,0);
  }).bind(this), duration);
}

function slide_right(element){
  if (LTR){
    is_transitioning(element, 'outright');
  } else {
    is_transitioning(element, 'outleft');
  }
  element.removeAttribute('selected');
  end_transition(element, 500);
}

function slide_left(element){
  if (LTR){
    is_transitioning(element, 'outleft');
  } else {
    is_transitioning(element, 'outright');
  }
  element.removeAttribute('selected');
  end_transition(element, 500);
}

function slide_center(element, from){
  is_transitioning(element, 'in'+from);
  end_transition(element, 500);
  element.setAttribute('selected','');
}

/**
 *        TOC Iteration
 * =======================================
 */
let stepsToc = Array.from(document.querySelector('[data-md-scrollfix]').children);
const nextState = { additionalInformation: 'Updated the URL with JS' };

var cyclicIterator = function (array) {
  var index = 0;
  var tocSteps = array.slice(0);
  var instructions = Array.from(document.querySelectorAll('[data-step]'));
  let getHref = (li) => li.firstElementChild.getAttribute('href');

  return {
      current() {
          return tocSteps[index];
      },

      next() {
          tocSteps[index].removeAttribute('selected');
          slide_left(instructions[index]);
          index = ++index % tocSteps.length;
          slide_center(instructions[index], right());
          tocSteps[index].setAttribute('completed', '');
          tocSteps[index].setAttribute('selected', '');
          window.history.replaceState(nextState, `Step ${index}')}`, `${getHref(tocSteps[index])}`);
          return this.current();
      },

      previous() {
          slide_right(instructions[index]);
          tocSteps[index].removeAttribute('selected');
          tocSteps[index].removeAttribute('completed');
          if(--index < 0) {
            index += tocSteps.length;
          }
          slide_center(instructions[index], left());
          tocSteps[index].setAttribute('selected', '');
          window.history.replaceState(nextState, `Step ${index}')}`, `${getHref(tocSteps[index])}`);
          return this.current();
      },

      _jump(to, animate = true){
        if (index == to) return;
        var here = index;
        var diff = to - index;
        tocSteps[here].removeAttribute('selected');
        if (animate) {
          if (diff > 0){
            slide_left(instructions[here]);
            slide_center(instructions[to], right());
          } else if (diff < 0){
            slide_right(instructions[here]);
            slide_center(instructions[to], left());
          }
        } else {
          instructions[here].removeAttribute('selected');
          instructions[to].setAttribute('selected', '');
        }
        while (diff > 0){
          tocSteps[here + diff].setAttribute('completed', '');
          diff--
        }
        while (diff < 0){
          tocSteps[here + diff + 1].removeAttribute('completed');
          diff++
        }
        tocSteps[to].setAttribute('selected', '');
        // This will replace the current entry in the browser's history, without reloading
        window.history.replaceState(nextState, `Step ${to}')}`, `${getHref(tocSteps[to])}`);
        index = to;
      },

      getIndex(hash){
        for (var i = 0; i < tocSteps.length; i++){
          if (hash == getHref(tocSteps[i])){
            return i;
          }
        }
      },

      hasNext(){
        return (index < tocSteps.length - 1);
      },

      hasPrevious(){
        return (index > 0);
      }
  };
};


let iter = cyclicIterator(stepsToc);
const nStep = document.getElementById('next-step');
const pStep = document.getElementById('previous-step');
const done = document.getElementById('done');

function jump(i, animate = true){
  iter._jump(i, animate);
  if (iter.hasPrevious()){
    pStep.removeAttribute('disappear');
  } else {
    pStep.setAttribute('disappear', '');
  }
  if (!iter.hasNext()){
    done.removeAttribute('hidden');
    nStep.setAttribute('hidden', '');
  } else {
    done.setAttribute('hidden', '');
    nStep.removeAttribute('hidden');
  }
  save_progress(i);
};

/**
 *        Duration Calculation
 * =======================================
 */

/**
 * Add two string time values (HH:mm:ss) with javascript
 * https://gist.github.com/joseluisq/dc205abcc9733630639eaf43e267d63f
 *
 * @param {String[]} times  Array of string in format 'HH:mm:ss'
 * @returns {String}
 */
 function addTimes(times) {
  var res = [ 0, 0, 0 ]

  var timeList = times.map(a=>{
   var tuple = (a || '').split(':');
    while (tuple.length < 3){
        var front = tuple.shift();
        tuple.push(front);
        tuple.push(0);
    }
   for (var i = 0; i < res.length; i++) {
    tuple[i] = isNaN(parseInt(tuple[i])) ? 0 : parseInt(tuple[i])
    }
    return tuple;
  });

  // Add time values
  for (let t of timeList) {
    res[0] += t[0];
    res[1] += t[1];
    res[2] += t[2];
  }

  var hours = res[0]
  var minutes = res[1]
  var seconds = res[2]

  if (seconds >= 60) {
    var m = (seconds / 60) << 0
    minutes += m
    seconds -= 60 * m
  }

  if (minutes >= 60) {
    var h = (minutes / 60) << 0
    hours += h
    minutes -= 60 * h
  }

  return {hours:hours,minutes:minutes,seconds:seconds}
  //return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
}

let estimatedTime = addTimes(
  Array.from(document.querySelectorAll('[duration]')).map(node=> node.getAttribute('duration'))
  );
document.getElementById('time-estimate').innerText =
  `${estimatedTime.hours? estimatedTime.hours + ' hours ' : ''}`
  + `${estimatedTime.minutes? estimatedTime.minutes + ' minutes' : ''}`

/**
 *        Event registration
 * =======================================
 */

stepsToc.forEach((li,i) => {
  li.addEventListener('click', (e)=>{
    e.preventDefault();
    jump(i);
  })
})

nStep.addEventListener('click', (e) => {
  e.preventDefault();
  if (!iter.hasPrevious()){
    pStep.removeAttribute('disappear');
  }
  iter.next()
  if (!iter.hasNext()){
    // enable done 
    done.removeAttribute('hidden');
    nStep.setAttribute('hidden', '');
  }
});

pStep.addEventListener('click', (e) => {
  e.preventDefault();
  iter.previous();
  if (!iter.hasPrevious()){
    pStep.setAttribute('disappear', '');
    //pStep.removeAttributeNS('disappear');
  }
  if (iter.hasNext()){
    // hide Done Button and reshow Next
    done.setAttribute('hidden', '');
    nStep.removeAttribute('hidden');
  }
});

window.onload = function(){
    var hash = window.location.hash;
    if (hash){
      let t = iter.getIndex(hash)
      jump(t > 0? t : 0, false);
    } else {
      jump(get_progress(), false)
    }
  };