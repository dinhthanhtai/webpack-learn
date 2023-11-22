## Caching 
 - when deploy to server, clients (typically browser) will hit that server to grab the site and it's assets => allow sites to load faster with less unnecessary network traffic

### Output Filenames
- the [contenthash] substitution will add a unique hash based on the content of an asset

### extracting Boilerplate 
- dùng để extract third party libs => `vendors` chunks as they are less likely to change than our local source code 