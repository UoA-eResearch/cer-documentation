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


Instrument Data Service has a cascading access control mechanism which allows you to apply restrictions on which users or groups of users can access a file or a group of files. Permissions granted at a higher level of the hierarchy will cascade down to all the files nested in it unless explicitly overridden.

Users must have an account created in Instrument Data Service in order to access the data.

