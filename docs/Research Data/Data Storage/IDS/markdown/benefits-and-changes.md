---
title:  "Benefits of using the Instrument Data Service (IDS) and potential changes to existing workflows"
categories: generic admin user howto
# status: active
level: novice
---

# Benefits of using the Instrument Data Service (IDS) 

The IDS is beneficial if your instrument generates a lot of data. The following benefits are applicable for all roles, **Facility Managers** are expected to get even more out of using the IDS. 
Overall, using the IDS might entail some changes to existing workflows, but after some initial setup this shall be overcompensated by the benefits.

 

??? tip "Supporting *peace of mind* by providing a **real backup**"

    - File transfers are **verified** (checks that files weren't corrupted while being moved from one location to another); afterward, data is stored on **magnetic tape** which is in general considered a secure storage option (no spinning disk components to fail, etc)
    - Storing follows the **WORM principle** (Write-Once-Read-Many), with **no accidental overwriting** (even if analysis tasks use that data and accidentally overwrite these inputs, you can roll back to the raw/untouched copy) this also implies following the [Tidy Data principles](https://research-hub.auckland.ac.nz/guide-to-managing-research-data/organising-and-describing-data/tidy-data)
    - Therefore, prevention against ransomware attacks (where attackers commonly encrypt your data and only decrypt it after paying for it), is also provided as there is no write-aceess to this data stored on magnetic tape. Ultimately, if you decide to encrypt your data, it is of utmost importance to remember the password you used. 

??? tip "**You** are in charge of granting access in a very finely granular fashion"

    - You do not have to wait on other services/service providers. You can find and add users just by entering their UPI to a project you administer.
    - Access rights can be given in a very finely granular way; 
    Consider the example of a clinical trial with identifiable data; you can decide only to share meta-data (e.g., how many participants, their age, …) with collaborators but not the data in itself. This might be suitable for collaborators just requiring to be aware that other datasets exist or you can even mark parts of the meta-data as sensitive (not sharing the age, gender, etc. with all contributors)


??? tip "Use metadata efficiently"

    -  in this context, we refer to metadata as the data about the data, more details to be found [here](https://research-hub.auckland.ac.nz/guide-to-managing-research-data/organising-and-describing-data/what-is-metadata-in-research-data-management)
    -  Using metadata enables you to filter and only display results relevant to your current needs. 
    -  enriching your core data by metadata will not only simplify finding and filtering data *within* your projects, but also potentially relevant data created by others; in case they decided to share (meta)data. If applicable (e.g., not restricted by ethics concerns), you might not need to redo others’ experiments or, if you decide to do so, have more data to compare your results against.

    -  In the ongoing IDS development, we collaborate with researchers across disciplines to derive relevant metadata-schemas that shall streamline metadata usage to make your life as a researcher wrangling data easier. 

??? tip "Supports good research principles"

    -  The IDS supports following the [FAIR principle](https://research-hub.auckland.ac.nz/guide-to-managing-research-data/ethics-integrity-and-compliance/fair-principles-for-research-data) which states that (meta)data should Findable, Accessible, Interoperable and Reproducible; ideally also by machines/ If data is classified within the IDS as 'public data', this enables you to combine it with other datasets. You might not have to redo an experiment if someone else has already done it; if you redo it, you get a better comparison dataset. You will always have access to a copy of the *raw* data for the purposes of transparency, reproducibility, or verifying provenance.
    -  Aspects of [Tidy Data](https://research-hub.auckland.ac.nz/guide-to-managing-research-data/organising-and-describing-data/tidy-data) are: Keeping an untouched copy of the raw data; having a proper backup;  and makeing use of metadata which is all facilitates by using the IDS. 

??? tip "Additional Benefits for Facility Managers"

    -  Project-based administration as opposed to Principal Investigators (POs) and Research Drive-based.
    -  Instead of having to provide access rights on a *file-and-folder* basis, you are empowered to use **groups** and let access controls and other administrative specifics be inherited. 
    -  You can generate **analytics** about who uses what instruments and how often. 
    -  This can support **decision-making** on new purchases and might facilitate justification of aspects or the whole service. Without the need to manually generate such reports. 
  
# Anticipated changes to existing workflows

- You need to familiarise yourself with a new tool/environment
- Some initial setup is required (setting up groups per facility, etc.)
- The service is intended for raw data only; processed results will need to be stored as per the usual workflows and infrastructure. Some exceptions to this rule are expected if your analysis is so computationally or time-consuming that pipeline-based results will be treated as a fictitious instrument following the same mechanisms described above
- Several University of Auckland-specific mechanisms for fostering cybersecurity are incorporated, which limits the potential for external collaboration.  
  - As the IDS potentially involves sensitive data while widening the user base, granting more rights (e.g. to add users with certain data visibility permissions), intentionally limilts the ability to share data with collaborators. Though their access isn’t impossible, it usually involves the creation of a University of Auckland ID (UPI), Virtual Private Network (VPN) access, etc. 