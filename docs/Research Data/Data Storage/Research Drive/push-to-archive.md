---
title:  "Research Drive Push to Archive"
categories: generic admin user howto
# status: deprecated
level: expert
---



## How to speed up the process of files migrating to Archive (i.e. Tape storage)

Scenario: 

- The Archive subfolder shall be used to free up storage on the fast tier (i.e., the top-level folder) of the Research Drive. 
- Usually, the migration happens for files that have been in the Archive sub-folder for more than 21 days (This was intentionally chosen so you would have time to restore files if you accidentally moved them to the Archive sub-folder; Sidenote: Files <1MB are not migrated to Archive.)
- Files shall migrate asap.

To trigger the move to Archive, you can override the `adate` (the acess data) mimicking that files have been in the Archive sub-folder without a change for more than 21 days. 

!!! question
    Could we run all that (including the GitHub repo cloned) in a VM or a Google Colab notebook? So we don't have to ask researchers to perform many (potentially time-consuming and error-prone steps) on their own machine/VM?

!!! bug
    This is my very untested and superficial approach

Prerequisites:

- you should have the name of the Research Drive whose migration shall be sped up handy
- you should have mounted this Research Drive to a machine (local or Virtual Machine) that ideally has Python installed

Steps:

- please follow the detailed instructions provided [in this GitHub Repo](https://github.com/UoA-eResearch/vault_recall#readme)
  - more details around [this step](https://github.com/UoA-eResearch/vault_recall#running)
    - open a terminal
    - navigate to the top-level folder of the Research Drive in question
    - execute this command: `find . -type f > filelist.txt`
      - Output 1 = `filelist.txt`
    - you will then use this filelist.txt in the next step (please make sure that you either have the `filelist.txt` file in the same folder that you execute this command on, or that you provide the path to the `filelist.txt` file)
    - `check_recall_progress.py -f filelist.txt`
      - Output 2 = `recall_progress.csv` located in your home folder (`~`)
  - The actual *migration to Archive* process is triggered by running this final command which relies on the previous Outputs 1 and 2: `check_recall_progress.py`





