---
title:  "Research Drive"
categories: generic admin user howto
# status: deprecated
level: expert
---


# Research Drive

Research Drives are Network drives that are managed by the UoA and within our firewall.
A detailed comparison can be found [here](https://research-hub.auckland.ac.nz/guide-to-managing-research-data/research-data-management-or-storage-compute-and-analysis/choosing-data-storage). 

To highlight some important aspects, Research Drives are the preferred option if your data...

- ... is sensitive and your Ethics Approval requires you to store it on a UoA managed system (and/or) within New Zealand
- ... shall be easily accessible from a Virtual Machine (LINK) or a HPC (LINK)

## How to get access to a Research Drive

While the process of making the Research Drive available on your computer is similar, special attention has to be paid to the syntax/the exact use of the address. This differs per operating system.

Another factor is where you try to access the research drive from. 
- On-campus | wired connection (=Ethernet = LAN-cable)
  - no VPN required 
- On-campus | WiFi connection 
  - VPN required (double check)
- Off-campus | Wired or WiFi connection 
  - VPN required 


### Mac

- Open your `Finder` application
- Press ++cmd+k++
- `smb://research.auckland.ac.nz/ResearchDrive/YOURDRIVE`
  - substitute YOURDRIVE with the name of your drive, one example is `ressci123123`

### Linux

- add here

### Windows

- add here


## Allocation Notice

!!! info "For internal use, to be deleted once system goes live/researcher-facing"
  - this is the message that the `eres` command gives for ResDrive (similarly for Dropbox)
  - the intention for having it here is that we can easily find it when a new researcher is added to an existing drive and needs support
  - the wording should include "Kia ora" and "Ngā mihi", special characters should be removed (currently there is an `obj` object in there. )



## How to speed up the process of files migrating to Archive (i.e. Tape storage)

Scenario: 

- I have a lot of files on the Research Drive that I already moved to the Archive subfolder. I expect that this will free up my storage (as files in Archive don't count against my quota). 
- Usually, the migration happens for files that have been in the Archive sub-folder for more than 21 days. This was intentionally chosen so you would have time to restore files if you accidentally moved them to the Archive sub-folder.
(Sidenote: Files <1MB are not migrated to Archive.)
- However, you want to speed up the process and have the files migrated to Archive immediately.

To trigger the move to Archive, you can override the date that files were put in the Archive folder, so the automation running in the background identifies these for its next migration run.

!!! question
    Could we run all that (including the GitHub repo cloned) in a VM or a Google Colab notebook? So we don't have to ask researchers to perform many (potentially time-consuming and error-prone steps) on their own machine/VM?

!!! bug
    This is my very untested and superficial approach

Prerequisites:

- you should have the name of the Research Drive whose migration shall be sped up handy
- you should have mounted this Research Drive to a machine (local or Virtual Machine) that ideally has Python installed

TODO #17 STANDARD BOXES SHOULD BE USED HERE

Steps:

- please follow the detailed instructions provided [in this GitHub Repo](https://github.com/UoA-eResearch/vault_recall#readme)
  - more details around [this step](https://github.com/UoA-eResearch/vault_recall#running)
    - open a terminal
    - navigate to the top-level folder of the Research Drive in question
    - execute this command: `find . -type f > filelist.txt`
      - Output 1 = `filelist.txt`
    - you will then use this filelist.txt in the next step
    - `check_recall_progress.py -f filelist.txt`
      - Output 2 = `recall_progress.csv` located in your home folder (`~`)
  - The actual migration to Archive process it triggered by running this final command which relies on the previous Outputs 1 and 2: `check_recall_progress.py`



