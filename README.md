# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


### Edits and updates

Make changes on a feature branch; submit a Pull Request into the `staging` branch.

#### Custom CSS

The following custom styles are available.

**Highlight a channel**<br>
`.channels` e.g. `<span class="channels">#channel-name</span>`

**Highlight a role**<br>
e.g. `<span class="archer">Archer</span>`  

See `/src/css/custom.css` for the full list of roles.

**Use a figure and figcaption for an image with a caption**
```
<figure>
    <img src="https://i.imgur.com/qzX6p89.png" alt="Screenshot of wrapeth.com" />
    <figcaption>Ready to wrap xDAI.</figcaption>
</figure>
```

**Notes on using HTML tags**
* Markdown between HTML tags won’t work.
* Use closing tags (including `<br />` and `<img />`) or the build will break.