# The Classy

## Installation

1. Download theclassy.zip from your ThemeSpectre.com order page or confirmation email.
2. Create a folder/subdirectory called 'theclassy' in `/content/themes/`.
3. Unzip theclassy.zip into `/content/themes/theclassy/`.
4. Restart Ghost.
5. Log into the Ghost admin panel.
6. Go to *Settings > General* and select **theclassy** as your Theme.
7. Save the settings.

## Customization

In *Settings > General* several options will alter the content in *theclassy*:

* **Blog Title** - Appears in bold within the blog header.
* **Blog Description** - Appears underneath the title.
* **Blog Logo** - Appears to the left of the blog title in the header.
* **Posts per page** - Determines how many posts are displayed at a time on the homepage. 4 is recommended.

Some fields in *Settings > User* also appear within the theme:

* **Full Name** - Appears underneath the Post Title in individual blog posts.

The *cover, *location*, website,*, *picture*, *bio* and *email* fields are currently unused.

### Custom Styles and JavaScript

Custom styles can be placed in `/content/themes/theclassy/css/custom.css`.

Custom JavaScript can go into `/content/themes/theclassy/js/scripts.js`.

Both of these files are already loaded into the theme and ready to go.

### Navigation Links

The static links that appear in the header of the blog can be customized by editing the navmenu.hbs file.
These links can be anything, including links to specific posts, or links to other sites.

1. Open `/content/themes/theclassy/partials/navmenu.hbs`
2. Edit the anchor elements within each list item.
3. Save navmenu.hbs
4. Refreshing the page will show the changes.

### Social Links Menu

Similar to the Navigation links, the Footer and Social Links are editable in a Handlebars template.

To edit the Social Links menu:

1. Open `/content/themes/theclassy/partials/footer.hbs` and find the <section> with the social links near the bottom.
2. Add the URLs to your social media profiles to the href of each link. For example, a link to Theme Spectre's Twitter account will look like:
`<li><a href="http://twitter.com/ThemeSpectre"><span class="symbol">&#xe287;</span></a></li>`
3. Save footer.hbs. You do not need to restart Ghost for the changes to take effect.
4. For different/additional social links, go to http://drinchev.github.io/monosocialiconsfont/ to find the appropriate icon.
5. Copy the *unicode* value for your desired icon (e.g. &#xe252;).
6. Duplicate a list item in the social links menu, and replace the existing unicode value with the one retrieved from the MonoSocial website.
7. Replace the URL with a new URL for your particular profile.

### Disqus Comments

To enable Disqus comments:

1. Open `/content/themes/theclassy/partials/footer.hbs` and uncomment the `{{!> comments}}` partial tag (line 23) by removing the exclamation point (!).
2. Open `/content/themes/theclassy/partials/comments.hbs`
3. If you do not yet have a Disqus account, sign up at www.disqus.com
4. Copy the *Disqus shortname* for your site and paste it into line 13, replacing the word *example* with your site's shortname.
5. Save comments.hbs.

If you wish to use Facebook Comments, Google+, or another discussion system, you may replace the entire contents of the comments.hbs file with whatever code is necessary for your system of choice.

## Advanced Customization

If you wish to completely restyle the look and feel of *theclassy* for your site, you are free to do so. Theme Spectre themes are based on SASS (SCSS syntax), and compiled with Grunt.

To begin editing the SASS files, ensure you have SASS 3.2 or 3.3-alpha installed.
Run `npm install` in `/content/themes/theclassy` to install all the Grunt dependencies.

`grunt` will simply compile all the SASS files into style.css and ie.css.
`grunt watch` will start a process that will watch the SASS files for changes, and compile each time a SASS file is saved.

**Please Note:** When running the `grunt` task and re-compiling the SASS files, the following CSS files will be overwritten: `/content/themes/theclassy/css/ie.css` and `/content/themes/theclassy/css/style.css`.  If you have any custom CSS in those files, they will be removed.  Please place any CSS customizations in `/content/themes/theclassy/css/custom.css` as it is never overwritten by `grunt`.

