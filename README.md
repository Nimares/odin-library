TO-DO: HTML/JS 
1. [X] func: addBookToLibrary input to add to library (adds to array) []
2. [X] func: displayBooks display library in table or on cards
3. [X] func: newBook
    * form
    * author, title, number of pages, whether it’s been read
    * seperated displayBook, and displayLibrary. 
4. [X] func: deleteBook
    - Now functioning
    - Was facing issues, i was trying to apply event listener before the elements were present in the DOM
    - fixed by adding event listener to each book delete button on creation.
    - also faced issues with using delete from object / remove from dom (i needed a break)
5. [X] func: updateReadStatus
    Goal: Button that changes appearance based on read status of each book. 
    Progress:
        - 05.12.24: 
            * For toggling classes, you should either toggle in style of dark
                mode (default style vs dark mode) or have function check read read-status boolean
                and then react based on this seperated style classes for button. 
            * 1 class for button style, and 2 different classes based on read-status
            * read-status button color edited via css
        - 13.01.25
            * used toggle switch rather than button. 
            * no need for seperate style classes. Button style changed based on checked attribute. 
6. style: General page layout
    - Change to card-style layout
    - 
7. optional: darkmode & responsive design. 
8. final: review and assessment 
    Goal: 
        1 - HTML/CSS checking.
        2 - Refactor 
        3 - Look at other students projects
        4 - Closing thoughts

Optional: 
- try some of the css methods you've seen for responsive design (link to video)
- try some css methods from previous lessons
- add icons (not svg)
- try dark/light mode

Thoughts: 
- Simplistic style. Look at other libraries for inspiration (Roehampton?)

Approach: 

Progress and process log: 
- 07.12.24: 
    Goal: reorganize book structure. Currently site is functional, but it does not look appealing. Responsive elements are too responsive. 

    Approach: Remove visual aspects. Make a working card-style display. Once this is working, I can re-add styles.

- 07.12.24
    * Solution: Changed to card view
    * Problem: Delete button targeting parent element.
        - Goal: Change more robust way of removing book. Independent of page format

- 13.01.25
    * Plan: [X] Restructure book element layout and style. 
            [] Complete general page layout and style 
            [] Make a cleaner dialog / modal apperance.
                - Additionally, make it so that each dialog option starts fresh