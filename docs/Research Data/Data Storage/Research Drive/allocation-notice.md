---
title:  "Research Drive Allocation Notice"
categories: generic admin user howto
# status: deprecated
level: beginner
---


## Allocation Notice

!!! info "For internal use, to be deleted once the system goes live/researcher-facing"
    - this is the message that the `eres` command gives for ResDrive (similarly for Dropbox)
    - the intention for having it here is that we can easily find it when a new researcher is added to an existing drive and needs support; we have to decide if we want the main text (and updates) to live here in the documentation or on the command-line or if we just add a link to the command-line ` eres drive allocation notice   project_groups.json`
    - the wording should include "Kia ora" and "Ngā mihi", special characters should be removed (currently there is an `obj` object in there. )

The current allocation notice is generated based on [this template](https://github.com/UoA-eResearch/ceradmin_cli/blob/ee1d2e88ed4bc7aa0e61d9a6b288a5a71322951f/ceradmin_cli/templates/jinja/research_drive_assigned.tpl).


### Goals

- replace *"Dear..."* with *"Kia ora ... Ngā mihi"*
- agree on the wording 
    - Research Drive
    - Research Network Drive
    - Network Research Drive
    - clearly state that this is not the same as a Faculty drive (P:\ drive, ...) but only the CeR-provided ones
    - *map* drive, *mount* drive, *connect* drive, *access* drive
- mention early that VPN is required for off-campus access
    - [this](https://www.auckland.ac.nz/en/students/academic-information/postgraduate-students/postgraduate/postgraduate-support-and-services/vpn-service.html) seems to be the official and hopefully not-breaking but frequently updated link
- replace "*The location of the folder is:*" with three distinct sections
    - Windows
    - Mac and Linux
- Why are there two guides for Windows?
    - why does the [first one](https://uoa-eresearch.github.io/vmhandbook/doc/map-drive-windows.html) start with "Network drives include your Unifiles home folder, Unifiles research drives and other network file systems that start with \\machine_name. This tutorial will mount your Unifiles home folder \\files.auckland.ac.nz\myhome to F:\ drive on Windows." Do we need this?
    - the [second link](https://uoaprod.service-now.com/kb_view.do?sysparm_article=KB0010125) talks about mapping Faculty drives
- This part is unclear; where does that go? We need screenshots: Note: *In particular, when you are accessing your research drive from off-campus, your username must be entered as "uoa\your_upi_here"*
- Is this important? *Please note: for system compatibility, your drive name has been lowercased.*
- do we want to mention Vault? Archive?
- do we want to mention Globus?
    - if so, do we want to still link to [this documentation](https://support.nesi.org.nz/hc/en-gb/articles/4405623380751) by NeSI?
- should mounting a ResDrive on a VM already be covered in this first notice?
- do we want to link to https://eresearch-dashboard.auckland.ac.nz/service/research-storage/request or just to the Research Hub?
- do we want to discuss details of access (no sub-folder-specific access rights but just whole ResDrive with `r-o` or `r-w`) in this first message?
- do we want to include a **fixed time frame** (so if I don't hear back from you until next Friday, I will close this ticket by then?)

### Current allocation notice

``` bash
Dear {{ requester_name }},

Your university network research drive team folder "{{ team_folder }}" has
now been set up as requested.

Please note: for system compatibility, your drive name has been lowercased.

The location of the folder is:

* Windows: \\files.auckland.ac.nz\research\{{ team_folder }}
* Mac and Linux: //files.auckland.ac.nz/research/{{ team_folder }}

A guide for mapping drives to such locations can be found here:
* Windows:
    - https://uoa-eresearch.github.io/vmhandbook/doc/map-drive-windows.html
    - https://uoaprod.service-now.com/kb_view.do?sysparm_article=KB0010125
* Mac: https://uoaprod.service-now.com/kb_view.do?sysparm_article=KB0012883
* Linux: https://uoa-eresearch.github.io/vmhandbook/doc/mount-drive.html

If you will be accessing the drive from off-campus, please read:
* Off-Campus: https://uoaprod.service-now.com/kb_view.do?sysparm_article=KB0010878

Note:
  In particular, when you are accessing your research drive from off-campus, your username must be entered as "uoa\your_upi_here".

Please have a go at mapping and using the folder and let me know if you encounter any issues.
You may need to log off and log back in to see the changes.

Outside of your allocation, your main folder also has two additional sub-folders called "Vault" and "Archive".
These folders are for data that you do not currently work on but may need in the future.

"Vault"
    access is slightly slower than your normal disk storage,
    ideal for data that you have finished working on but would like to come back to every few months.
    Data stored here is periodically moved to object-store, and once moved, does not count against your allocation.
"Archive"
    access is slower again,
    good for data that you may not use but would like to keep safe,
    e.g. to comply with your ethics requirements.
    Data stored here is periodically moved to tape, and once moved, does not count against your allocation.

You can use globus (globus.org) to transfer data between your research drive and NeSI and other globus endpoints -
(documentation at https://support.nesi.org.nz/hc/en-gb/articles/4405623380751).
If you want this access for your team, please provide us with their UPIs.

If you also have a research virtual machine (vm) provided by the Centre for eResearch,
you can map the drive onto the vm according to the type of vm, as above (Windows or Linux cases).
We recommend that you move data off your research vm onto the research-drive after you have
completed your analysis, and consider storing it in the Vault or Archive folders as appropriate.
￼
Access

We have granted read-only/read-write access to those you have requested:
read-write:
    {% for x in read_write -%}
        * name:{{ x['name'] }},  username: {{ x['username'] }}
    {% endfor -%}

{% if read_only %}
read-only:
    {% for x in read_only %}
        name:{{ x['name'] }},  username: {{ x['username'] }}
    {% endfor %}
{% endif %}
This access is uniform right across the drive - finer-grained access cannot be provided.
If you wish to add or revoke access to your drive, please make a request at
https://eresearch-dashboard.auckland.ac.nz/service/research-storage/request for
an __existing__ drive, providing relevant University emails or
usernames (UPI) and level of access (read-only/read-write).

When you have satisfactory access to your storage drive, please let us know
so that we can close this ticket.

In the meantime, please get back to me if you have any questions or difficulties.
```

