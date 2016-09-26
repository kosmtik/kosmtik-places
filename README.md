# kosmtik-places

Manage place bookmarks.


Work in progress: for now it only reads the bookmarks from a "bookmarks.yml" file
in the root of a project or a "bookmark" entry in the kosmtik.yml file.

TODO:
- add new bookmarks from the UI, with name from reverse geocoding
- allow to edit a bookmark to change its name or add a comment
- allow to delete a comment
- add an option to save the bookmark in the project "bookmark.yml" file
  (only available for the given project, but sharable with orthers)
  or in the main config file (usable in all projects)

## Example of bookmark yml entry:

      - place_name: Home
        zoom: 15
        comment: This is a comment for the bookmark
        center:
        - 48.9513
        - 2.3041

`zoom` is optional (current zoom will be used if not given).
`comment` is optional.

## Install

While in your kosmtik root, type:

`node index.js plugins --install kosmtik-places`

## Issues and feature requests

Please report any issue or feature request on the [main kosmtik repository](https://github.com/kosmtik/kosmtik/issues).
