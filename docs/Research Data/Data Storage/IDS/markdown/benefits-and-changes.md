---
title:  "Benefits of using the Instrument Data Service (IDS) and potential changes to existing workflows"
categories: generic admin user howto
# status: active
level: novice
---

# Benefits of using the Instrument Data Service (IDS) 

The IDS is beneficial if your instrument generates a lot of data. The following aspects are primarily independent of your role in the project; additional benefits for Facility Managers follow at the end of this page. This might entail some potential changes to existing workflows but initial setup efforts are expected to be overcompensated by the benefits:

 

??? tip "Supporting *peace of mind* by providing a **real backup**"

    - File transfers are verified (checks that files weren't corrupted while being moved from one location to another); afterwards, data is stored on magnetic tape which is in general considered a secure storage option (no spinning disk components to fail, etc)
    - Storing follows the WORM principle (Write-Once-Read-Many), with no accidental overwriting (even if analysis tasks use that data and accidentally overwrite these inputs, you can roll back to the raw/untouched copy (following the [Tidy Data principles](https://research-hub.auckland.ac.nz/guide-to-managing-research-data/organising-and-describing-data/tidy-data)
    - This also prevents ransomware attacks. But if you decide to encrypt your data, it is of utmost importance to remember that password. 

??? tip "**You** are in charge of granting access in a very finely granular fashion"

    - You do not have to wait on other services/service providers. You can find and add users based on their UPI
    - Access rights can be given in a very finely granular way; 
    Consider the example of a clinical trial with identifiable data; you can decide to just share meta-data (e.g., how many participants, their age, …) with collaborators but not the data in itself. This might be suitable for collaborators just requiring to be aware that other datasets exist or you can even mark parts of the meta-data as sensitive (not sharing the age, gender, etc. with all contributors)


??? tip "efficiently using metadata"

    -  in this context, we refer to metadata as the data about the data, more details to be found [here](https://research-hub.auckland.ac.nz/guide-to-managing-research-data/organising-and-describing-data/what-is-metadata-in-research-data-management)
    -  enriching your core data by metadata will not only simplify finding and filtering data *within* your projects, but also potentially relevant data created by others, (if they decided to share data about their data). If applicable (e.g., not restricted by ethics concerns), you might not need to redo others’ experiments or, if you decide to do so, have more data to compare your results against.
    -  Using metadata enables you to filter and only display results relevant to your current needs. 
    -  In the ongoing IDS development, we collaborate with researchers across disciplines to derive relevant metadata-schemas that shall streamline metadata usage to make your life as a researcher wrangling data easier. 

??? tip "Supports good research principles"

    -  The [FAIR principle](https://research-hub.auckland.ac.nz/guide-to-managing-research-data/ethics-integrity-and-compliance/fair-principles-for-research-data) (Findable, Accessible, Interoperable and Reproducible): If data is classified as 'public data' this makes combination with other datasets easier. You might not have to redo an experiment if someone else has already done it; if you redo it, you get a better comparison dataset. You will always have access to a copy of the *raw* data for the purposes of transparency, reproducibility, or verifying provenance.
    -  [Tidy Data](https://research-hub.auckland.ac.nz/guide-to-managing-research-data/organising-and-describing-data/tidy-data): Keep an untouched copy of the raw data, have a proper backup and make use of metadata.

??? tip "Additional Benefits for Facility Managers"

    -  Project-based administration as opposed to Principal Investigators (POs) and Research Drive-based.
    -  Instead of having to provide access-rights on a file-and-folder basis, you are empowered to use **groups** and let access controls and other administrative specifics be inherited. 
    -  You can generate **analytics** about who uses what instruments and how often. 
    -  This can support decision-making on new purchases and might facilitate justification of aspects or the whole service. Without the need to manually generate such reports. 
  
# Anticipated changes to existing workflows

- You need to familiarise yourself with a new tool/environment
- Some initial setup is required (setting up groups per facility, etc.)
- The service is intended for raw data only; processed results will need to be stored as per the usual workflows and infrastructure. Some exceptions to this rule are expected if your analysis is so computationally or time-consuming that pipeline-based results will be treated as a fictitious instrument following the same mechanisms described above
- Several University of Auckland-specific mechanisms for fostering cybersecurity are incorporated, which limits the potential for external collaboration.  
  - As the IDS potentially involves sensitive data while widening the user base, granting more rights (e.g. to add users with certain data visibility permissions), intentionally limilts the ability to share data with collaborators. Though their access isn’t impossible, it usually involves the creation of a University of Auckland ID (UPI), Virtual Private Network (VPN) access, etc. 