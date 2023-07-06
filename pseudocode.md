# MoSCoW

## Must have:
* Input field to enter in items for the list
* Swap list to look at all completed items
* Swap list to look at all items that still need to be done
* Swap list to look at all completed itmes
* Button to complete items
* Button to clear completed items
* Button to uncheck completed items
* Button to delete items
* Button to delete all items
## Should have:
* Local storage for the site
## Could have:
* Login to swap between people if there are more than one person on the copmuter
* Prioriety markings that shown what needs to be done first
* Organize button that alphebetically organizes all list items
## Won't have:
* AI
* Voice recognition ("item" is done, check off "item.")

# Aglie Stories:
* As anonymous user, I want to add items to my To-Do list, so that I can remember what I need to do
* As anonymous user, I want to be able to clear all completed items with one button, so that I can get rid of the list I made easily
* As anonymous user, I want to be able to delete items, so that if i misspell something or do not need to it anymore it is not cluttering my list
* As anonymous user, I want to check off completed items, so that when I get them done I don't get them mixed up with other things that I need to do
* As anonymous user, I want to look at only items I haven't completed yet, so that I can see what needs to be done and completed items are not cluttering my list
* As anonymous user, I want to be able to look at only completed items, so that I can see what I have completed and possibly clear from the list

# Atomic design

## Atoms:
* Buttons:
    * Look at completed items
    * Look at items that need to be done
    * Complete item
    * Clear item
    * Look at all items
    * Uncheck completed items
    * Clear all completed items
    * Clear all items
* Title
## Molecules:
* Header (title)
* Footer (Swap list displays)
* List (Shows all items)
## Organisms:
* Everything on the same page

# PROCEDURAL
## BEGIN
* User loads onto page
* User enters in ToDo items
* Items are displayed on the list 
* User can check off items as done, delete items, or swap list displays
## END

# INIT
```
import React

-checkedList
// an array that holds all the items that have been checked off

-doList
// an array that holds all of the items that have not been checked (not done)

-Header
    - Holds the title (possibly put the input field here as well)

-ToDoList
    - Holds all items
    - Holds buttons to check off and delete items on the list

-Footer
    - Holds all buttons to swap list displays
    - Holds Clear and uncheck items buttons
```

# FUNCTIONAL
```
checkedList = []

ToDoList = []

export default function Header() {
    <h1>To-Do List</h1>
    <input>Enter To-Dos here</input>
}

export default function List() {
    //adds the item from input here
    //adds check and delete buttons to item when added to the list
}

export default function Footer() {
    //Holds display swaps (only checked items, only non-checked items, show all)
    //Clear all items button
    //Uncheck all items button
    //Clear all checked items button
}
```