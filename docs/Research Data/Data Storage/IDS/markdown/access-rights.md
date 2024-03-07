---
title:  "Instrument Data Service (IDS) access rights"
categories: generic admin user howto
# status: active
level: novice
---

# Different roles and their access rights 

<!-- copy from here https://uoa-eresearch.github.io/cer-documentation/Research%20Data/Data%20Storage/IDS/Wizard/Tutorial/05-access-control/ -->
The Instrument Data Service (IDS) is designed to support different roles in a research project. The following table provides an overview of the different roles and their access rights.


| **Role**             | **Access Rights**                                                                                   |
|----------------------|-----------------------------------------------------------------------------------------------------|
| super-admin          | can do all                                                                                          |
| admin                | cannot do this                                                                                      |
| facility manager     | has access to analytics, can create groups                                                           |
| Project Owner        | has to ask for groups to be created by Facility Manager or CeR; can add people                       |
| Project Team Member  | can edit all data visible to him, might not see all                                                 |


Instrument Data Service has a cascading access control mechanism that allows you to apply restrictions on which users or groups of users can access a file or a group of files. Permissions granted at a higher level of the hierarchy will cascade down to all the files nested in it unless explicitly overridden.

Users must have an account created in Instrument Data Service in order to access the data.

Access can be different per each level of PEDD; it gets inherited unless stated otherwise

These are additive rights which also affect the search, for example, if user has no sensitive-metadata-access hits of the search in sensitive-metadata are not presented as search results:
- default - metadata only (only fields that are not sensitive) 
- sensitive metadata access (field by field basis)
- download (if not part of sensitive; you wouldn't see it)
- admin (allows to share; PI gets this by default; not necessarily the sensitive metadata, e.g. NHI number where a 3rd party does the de-identification) make public/share with group/share with person

If you are in multiple groups, these are summed (union of n sets)

**Public access** (within the UoA sphere; logged-in through SSO) and metadata only

- Access is controlled either on per person or per group; we highly recommend per group
- currently PI (skipping the Facility Manager; every person that is in admin group has the right to allow devolved responsibility; all people in the admin group can modify access to the data and request additional groupings to access that data) send email to CeR and request a group
- if you give someone admin rights, you give them the ability to modify access to the data
- Request by a member: add this statement: As part of this request, we will seek permission from the PI or nominated admins in order to provide access (Chain of Custodiy)
- in the long-run: have a ticket queue in AskIT specific to IDS
(- in the very long run: Have a token to access a shared PEDD without VPN)
- groups can have management authority over other-groups
- PI can hand over access control to another group of his PhD and get an admin group for them; then the PhD can add based on UPI 
