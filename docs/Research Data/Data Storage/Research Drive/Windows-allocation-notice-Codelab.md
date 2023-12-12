---
codelab: true
# author: "Anonymous Penguin"
title: Accessing your Research Drive on a Windows Computer
description: |
  This guide shows you how to get access to (and retrieve/save) files on your Research Drive using a Windows computer.
tags:
  - ResDrive
  - Windows
  - beginner
hide:
  - tabs
---

## Background { duration="2:00" }

This guide will help you to access/mount/map your Research Drive on your computer. 
It is assumed that you have already requested a Research Drive and that it has been allocated to you. If you have not yet requested a Research Drive, please see the [Research Hub](https://research-hub.auckland.ac.nz/research-data/research-storage/) for more information.

This section focuses on Windows(:material-microsoft-windows:) the steps to access your Research Drive on a computer running Linux(:fontawesome-brands-linux:) or MacOS(:material-apple:) will be **slightly different**.

!!! info

    this is the version used to access a ResDrive from a Windows computer as **one single Codelab showing off the stepping**

## Preparation { duration="2:00" }

- Open your Windows Explorer (++win+e++) 
- Navigate to 'This PC'
  - 
- Make sure your 'View' is set to 'Details' (see screenshot below or use the keyboard shortcut ++ctrl+f1++ )
- Click on 'Map Network Drive'


## The Map Network Drive dialogue  { duration="2:00" }

- For the `Drive` letter, choose a letter that is not already in use (e.g., `R:\``)
- For the `Folder` please enter your Research Drive location (e.g., `\\files.auckland.ac.nz\research\**your_team_folder**`)
    - please pay close attention to the backslashes (`\\`) and make sure not to use forward slashes (`/`) in the path for Windows
    - tick :octicons-checkbox-16: the option 'Reconnect at sign-in'
        - click on `Finish`
    - When you’re done, you should see the new drive letter under `This PC` and will be able to access its contents like you would any other folder. If you want to disconnect the network drive, right-click on it and select `Disconnect`.

