# Roles and permissions

Use **Operations → Roles** to manage campus roles and to give them to people.
You need `read role` to open roles. You need `manage role` to write, change, copy, give, or take away a role.
Roles apply to the working campus.

Read [instructions by role](../using/roles) for the eight seeded roles and delegated specialist duties.

## Understand the access layers

| Layer | What it controls |
| --- | --- |
| Account status | Whether the person can sign in. |
| Organization membership | Organization management and reporting. |
| Campus membership | Whether the person can work in a campus. |
| Campus role | Permissions inside that campus. |
| Record policy | Whether the action is allowed for this record and its state. |
| Feature switch | Whether the application area is on. |

The **Roles** page lists each role with its permission count and how many people hold it at this campus.
The built-in roles are `platform-admin`, `organization-admin`, `admin`, `teacher`, `student`, and `parent`. They show **Built in**.
You cannot change or stop offering a built-in role. Copy it and change the copy.
Other seeded roles, such as `accountant` and `librarian`, are shared roles. You can change them.
`platform-admin` and `organization-admin` hold permissions above the campus. You cannot give them on this page.

## Create a campus role

![The role form has a name field and permission check boxes grouped by area.](/images/current/campus-role-light-desktop.webp)

Select only the permissions required for the job.

1. Select the working campus.
2. Open **Operations → Roles** and select **Write a role**.
3. Enter **Name**. Each name must be unique at the campus.
4. Optional: enter **What it is for (optional)**.
5. Under **What the role may do**, select only the permissions that the job requires.
6. Select **Write the role**.
7. Give the role to the person on the role page.

**Name** accepts 100 characters. **What it is for (optional)** accepts 255.
The list shows only the permissions that you hold at this campus.
If the name is in use, the form shows: "This campus already has a role called Accountant."

To copy a role, open it and go to **Start a new role from this one**.
Enter **Name of the copy** and select **Copy**.
The copy holds only the permissions that you can give yourself.

## Change a role

1. Open the role and select **Change**.
2. Change **What it is for (optional)** and the selected permissions.
3. Select **Save**.

A shared role, such as `accountant`, shows: "Every campus uses this role. A change here makes this campus its own copy, and other campuses keep theirs."
The campus copy keeps the people who held the role at this campus.
You can add or remove only the permissions that you hold.
The application refuses a change that leaves the campus with nobody who can manage roles.
The message is: "Nobody at this campus could manage roles after that. Give somebody else role management first."

## Give and take away a role

1. Open the role.
2. In **Person who works here**, select the person.
3. Select **Give**. The message is, for example, "Docs reader was given."
4. Check the person under **Who holds it here**.

You can give a role only when you hold all of its permissions.
A person who is an enrolled learner cannot hold a campus role.

To take a role away, open the menu beside the person and select **Take it away**. Confirm the prompt.
Review the person's other roles. Another role can give the same permission.

To stop new assignments, open the role menu and select **Stop offering it**. Confirm the prompt.
The **State** changes to **No longer offered**. People who hold the role keep it.
Take the role away from each holder when you revoke access.
Select **Offer it again** to make the role available again.

Platform permissions and organization permissions use their own scope.
A teacher assignment, staff employment record, guardian link, or learner placement does not replace a permission.

| Problem | Action |
| --- | --- |
| Built-in role has no **Change** button | Copy the role and change the copy. |
| Permission is not in the list | You do not hold that permission at this campus. |
| A change is refused | Check that somebody else at the campus can manage roles. |
| Holder of a role that is not offered still performs actions | Take the role away and review the person's other roles. |
| Role exists in another campus only | Write or copy the role in the working campus. |

## Check the result

- Check the role name and its permissions under **What it holds**.
- Verify permitted actions with the intended member account.
- Verify that an account without the permission cannot perform the action.

See [account access](../people/accounts) and [security design](../reference/security).
