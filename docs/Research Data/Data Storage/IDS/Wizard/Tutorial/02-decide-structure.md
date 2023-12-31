---
title:  "Decide how to describe and structure your data"
type: tutorial
order: 2
---

# Decide how to describe and structure your data


Before we start using the Instrument Data Wizard, it's good to plan out and document **how your data will be structured** for {{ service_name }}, so you and your collaborators (and your future self!) will easily be able to find and use your data in the {{ service_name }} web portal.

# How {{ service_name }} structures data

At its heart, {{ service_name }} is a database. Data are organised in a hierarchical structure, like folders and subfolders. There are three levels. You need to decide how to structure your data to fit in with this hierarchy.

![image](../../assets/OnionModel.svg){width=300px}


* Data files are grouped into *Datasets*.
* *Datasets* are organised into *Experiments*.
* *Experiments* belong to a *Project*.

A *Dataset* may belong to multiple *Experiments*, and an *Experiment* may belong to multiple *Projects*.

At each level of the hierarchy and at the individual file level, there are mandatory metadata fields that you can use to describe your data. There is also the ability to associate a custom metadata schema at each level, which allows you to record any relevant domain-specific observations and variables. The {{ service_name }} Search functionality allows you to filter for data based on metadata.

# Things to consider

Here are some things to consider when deciding how your data should fit into this hierarchy:

![image](../../assets/OnionModel2.svg){height=300px}

* Usually, there should be one *Project* that corresponds to the research project or unit of research activity that you are collecting data for.
* Use *Experiments* to represent a study sample or variable you are studying. Store properties about the sample as metadata in each *Experiment*.
* Create one *Dataset* for each instrument you are using for acquiring data. Use the *Dataset* to contain all data files from that instrument for the *Experiment*. Store instrument run conditions as metadata in each *Dataset*.
* If the data is already using a directory structure, consider how that could translate into the hierarchical groupings.
* Consider whether you need to restrict access for a subset of your data. If so, you can group them as separate *Experiments* or *Datasets*. Later, you can restrict access to them as a whole group.

# Sarah's sequencing data


As Sarah, you are studying how breast cancer cells respond to different drug treatments. You work closely within a group of three other PhD students led by Dr Charlotte Henare.

To collect data, you take samples of cancer cells from an anonymous donor from the Hospital, treating the samples with drugs, and sending them off to a sequencing company for processing.

You sent off 15 cell samples (5 for each group) six weeks ago that have:

1. no treatment,
2. treatment with the drug Herceptin, and
3. treatment with the drug Keytruda.

The tutorial data you downloaded are the resulting files sent through a USB stick via courier. The data contains the raw `*.fastq` files as well as aligned `*.bam` files (data processed by a bioinformatician) for each kind of treatment. 

!!! example
    You are now responsible for organising, setting up access control and adding metadata to the data, before it is ingested into the University's online instrument data repository {{ service_name }} . You and your group members can then access the data through the repository portal and use it in analysis.

Because the raw data is sensitive and could lead to the identification of patients, any raw data should only be accessible to yourself. Other data can be accessed by the whole group (with the group ID `eres004011-admin`)


After a discussion with your collaborators, you have created this data structure plan.

## Sample data structure plan

 - **Project** - The Project is called “Breast Cancer Drug Treatment Genomics” project, with the ID “BREAST04”.
 - **Experiments** - One experiment for each treatment type (i.e. “No treatment” with ID “NoTreatment”, “Herceptin” with ID “Herceptin”, Keytruda with ID “Keytruda”).
 - **Datasets** - In each Experiment, there would be two *Datasets*: one for raw `.fastq` files named “Raw” with ID “[Treatment ID]-Raw”, and another for aligned `.bam` files named “Aligned” with ID “[Treatment ID]-Aligned”.
 - **Datafiles** - Under each Dataset, there would be five files, one file from each tissue sample.
 - Clinical details and sequencing instrument configurations will be recorded as metadata at the Dataset level.

``` 
Project: “Breast Cancer Drug Treatment Genomics” - ID “BREAST04”/
├─ Experiments: (One experiment per treatment)/
│  ├─ “No treatment” with ID “NoTreatment”/
│  │  ├─ Datasets/
│  │  │  ├─ RAW (for raw .fastq files) with ID “[Treatment ID]-Raw"/
│  │  │  │  ├─ File 1
│  │  │  │  ├─ File 2
│  │  │  │  ├─ File 3
│  │  │  │  ├─ File 4
│  │  │  │  ├─ File 5
│  │  │  ├─ Aligned for aligned .bam files with ID “[Treatment ID]-Aligned”
│  │  │  │  ├─ File 1
│  │  │  │  ├─ ...
│  ├─ "Keytruda" (with ID “Keytruda”)/
│  │  ├─ Datasets/
│  │  │  ├─ RAW (for raw .fastq files) with ID “[Treatment ID]-Raw"/
│  │  │  │  ├─ File 1
│  │  │  │  ├─ ...
│  │  │  ├─ Aligned for aligned .bam files with ID “[Treatment ID]-Aligned”
│  │  │  │  ├─ File 1
│  │  │  │  ├─ ...
│  ├─ “Herceptin” with ID “Herceptin”/
│  │  ├─ Datasets/
│  │  │  ├─ RAW (for raw .fastq files) with ID “[Treatment ID]-Raw"/
│  │  │  │  ├─ File 1
│  │  │  │  ├─ ...
│  │  │  ├─ Aligned for aligned .bam files with ID “[Treatment ID]-Aligned”
│  │  │  │  ├─ File 1
│  │  │  │  ├─ ...

(Clinical details and sequencing instrument configuration)
```

!!! example "Exercise: How does your own data fit into this hierarchy?"
    Think about the data you would like to ingest into {{ service_name }} and discuss it with your collaborators. Plan out how you would structure the data. Ask for a consultation with the friendly {{ service_name }} staff if you would like some help!


