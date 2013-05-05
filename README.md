# How to Make Change to the Site

First, edit the site in your favorite text file. Pay attention not to edit files in `_site` directory but rather files in the root of the directory. Save the files and then go into `Terminal`.

Step 1: Pull in any updates (do this early and often, even before you start editing stuff).

`git pull --rebase`

Step 2: Regenerate the site using jekyll. In terminal, from the site's directory, type in:

`jekyll`

Step 3: Check the status of your repository

`git status`

Make sure that the files you expected to be edited are the only ones edited.

Step 4: Stage all your changes

`git add . `

Step 5: Commit your changes

`git commit -am "Your commit message"`

Step 6: Push your changes to the live site.

`git push`

You should see something like:

  Counting objects: 5, done.
  Delta compression using up to 4 threads.
  Compressing objects: 100% (3/3), done.
  Writing objects: 100% (3/3), 672 bytes, done.
  Total 3 (delta 1), reused 0 (delta 0)
  To git@github.com:flatiron-school/flatiron-school.github.io.git
    2123dd7..57d1059  HEAD -> master

The important line is: `    2123dd7..57d1059  HEAD -> master`

Notice the `->` that means the update was succesful. You might get a rejected message, in which case, run `git pull --rebase` again and then try `git push`

