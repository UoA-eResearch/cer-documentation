---
title:  "Login to the command-line through ssh"
categories: linux admin user howto
---

## If you're using Mac or Linux

Use a terminal to log in via ssh:

```bash
$ ssh <user name>@<VM name>
```

If you have admin privileges on the VM (sudo) you need to login through [2-factor authentication](./two-factor-authentication.md ). Otherwise, just use your University password to log in.

Example:

```bash
$ ssh abc123@cerdkroprd01.its.auckland.ac.nz
```

## If you're using Windows

Windows doesn't have a built-in SSH client, we need to install one of the following:

- [MobaXterm](https://mobaxterm.mobatek.net/)
- [Git bash](https://git-scm.com/download/win)
- [PuTTY](https://git-scm.com/download/win)

Open a terminal window, after the installation has completed. Log in. Follow the same steps as Linux.

!!! bug
    that is not descriptive enough: "Follow the same steps as Linux."

