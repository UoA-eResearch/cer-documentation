---
title:  "HPC"
codelab: false
---

# What is High Performance Computing

If you have a large amount of data to process, or a complex simulation to run, and your local computers take too long to finish this, you may need to use a High Performance Computing (HPC) system. Some also call this a Supercomputer.


## What is NeSI
The University of Auckland has access to the National eScience Infrastructure [(NeSI)](https://research-hub.auckland.ac.nz/research-software-and-computing/advanced-compute/nesi). Among other services, NeSI provides us with access to a HPC system.

## Rough outline of interacting with the NeSI HPC
Most of the HPC services run Linux (or a UNIX derivative) as their operating system. This means that you will have to use the command line to interact with the system.
Because you do not get access to the whole supercomputer by yourself, but you have to share these precious resources with many other researchers there is a scheduling system. This means that you have to submit your jobs to a queue and wait for them to be executed. 
There is a job scheduling system ([SLURM](https://support.nesi.org.nz/hc/en-gb/articles/360000691716)) and NeSI provides [tutorials](https://support.nesi.org.nz/hc/en-gb/articles/360000684396-Submitting-your-first-job) for it.

!!! tip
    While some researchers report having to wait for a long time for their jobs to be executed, others report that their jobs are executed within minutes. This depends on the size of your job and the current load of the system. Try splitting jobs as much as possible instead of running one big job, run 10 smaller ones

## Getting data to and from NeSI

Commonly, researchers need to upload data to the HPC system and download results from it.
A Research Drive (link) is often the easiest way to do this.
As NeSI is outside the {{ instutition-name }} firewall, you will need to use a piece of software called Globus for this. More information can be found here LINK 
You can use the [NeSI Data Transfer Platform](https://support.nesi.org.nz/hc/en-gb/articles/360000691696-Transferring-data-to-and-from-NeSI) to transfer data to and from NeSI. This is a web-based tool that allows you to upload and download data. It is also possible to use the command line to transfer data, but this is more complicated.

*[NeSI]: National eScience Infrastructure
*[HPC]: High Performance Computing