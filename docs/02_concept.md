# Base Concepts

The Constituency Portal introduces several concepts that might not be immediately clear.

## organisation

An organisation represents a company or another type of entity that can own network assets or
have contact data. organisations must belong to one or more tenants and can include
sub-organisations to reflect their internal structure.

## Privilege Levels

### orgadmin

An organisation Administrator (orgadmin) is the primary role within Tuency. If invited to manage
an organisation's data, you will assume this role. As an orgadmin, you are associated with a specific
company within the context of your role. If you're associated with multiple companies, you will use
the _Switch Node_ feature to select which company you wish to manage at any given time.

As an orgadmin, you can within your organisation:

1. View and request claims for network assets (netobjects).
2. View, create, and edit sub-organisations.
3. Invite new administrators to the organisation and its sub-organisations.
4. Manage the assignments of orgadmins to sub-organisations.
5. View, edit, and delete contact information.

### tenantadmin

A Tenant Administrator has all the capabilities of an orgadmin but across a specific tenant. This
includes accepting claims for netobjects within their assigned tenant.

### portaladmin

A Portal Administrator possesses the highest level of privileges, equivalent to those of a
tenantadmin but applicable to all tenants within the Portal. Additionally, a portaladmin can edit
tags for Contacts and organisations.

## Contacts

Contacts contain information used in various situations, each assigned one or more roles dictating
the required data. For instance, a _CISO_ role requires at least a phone number and an email address,
while a _24/7_ contact requires a dedicated round-the-clock telephone number.

Contacts are tied to a specific organisation, and sharing across organisations is not possible.
As an orgadmin, you can assign multiple contacts with various roles within your organisation, ensuring
the most relevant and accessible contact is used when necessary.

!!! note
    Your organisation need not cover all roles. Only include those relevant and desired for
    communication with us.

## Nodes

A "Node" signifies the linkage between your role and one or multiple organisations. For example,
if you are an orgadmin for several organisations, you can manage only one at any given time.
Switching nodes allows you to select which organisation you wish to manage.

## Netobjects

This term refers to different network assets (such as Autonomous Systems (AS), IP ranges, domains)
administered by an organisation.

## Tenant

Also known as a constituency, a tenant represents different CERTs (e.g., CERT.at, AEC) responsible
for communications with their respective organisations.
