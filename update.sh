#!/bin/bash
# Find the generated bundled assets of your Material version
# and insert it into `codelab/base.html`

cwd=$(pwd)
loc=$(pip show mkdocs-material | grep -Po '(?<=Location: )(.*)' )
v=$( pip show mkdocs-material | grep -Po '(?<=Version: )(\S*)')
dir="$loc/mkdocs_material-$v.dist-info/RECORD"
CSS_BUNDLE=$( grep -Po '(?<=material/templates/)(.*main\..*\.min.css)(?=,)' $dir )
PAL_BUNDLE=$( grep -Po '(?<=material/templates/)(.*palette\..*\.min.css)(?=,)' $dir )
SW_BUNDLE=$( grep -Po '(?<=material/templates/)(.*search\..*\.min.js)(?=,)' $dir )
JS_BUNDLE=$( grep -Po '(?<=material/templates/)(.*bundle\..*\.min.js)(?=,)' $dir )

echo $CSS_BUNDLE
echo $PAL_BUNDLE
echo $SW_BUNDLE
echo $JS_BUNDLE
base='codelab/base.html'
cp 'codelab/base-custom.html' $base
sed -i -E "s:assets\/.*\/main\.\S*\.min\.css:$CSS_BUNDLE:g" $base
sed -i -E "s:assets\/.*\/palette\.\S*\.min\.css:$PAL_BUNDLE:g" $base
sed -i -E "s:assets\/.*\/search\.\S*\.min\.js:$SW_BUNDLE:g" $base
sed -i -E "s:assets\/.*\/bundle\.\S*\.min\.js:$JS_BUNDLE:g" $base
cd $cwd
echo "Updated $base"