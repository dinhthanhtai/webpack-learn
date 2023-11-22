### Code splitting 

- nó là một feature cho phép slit code thành những bundle khác nhau => nó có thể load dựa vào nhu cầu hoặc load song song

- mục đích: impact on load time 

### 3 hướng tiếp cận chung 
1. `Entry Points`: Thủ công sử dụng `entry` configuaration
2. `Prevent Duplication`: use `Entry dependencies` or `SplitChunksPlugin` to dedupe and split chunks
 - Entry dependencies: `dependOn` option allow to share modules between the chunks 
 -- để ý vụ `optimization.runtimeChunk: 'single'` 
 - SplitChunksPlugin: allows us to extract common dependencies into an existing entry chunk or an entirely new chunk

3. `Dynamic imports`: Split code via inline function calls within modules 

### Prefetching/ Preloading modules 
1. `prefetch`: resource is probably need for some navigation in the future 
2. `preload`: resource will also be need during the current navigation
#### Sự khác nhau: 

- A preloaded chunk starts loading in parallel to the parent chunk. A prefetched chunk starts after the parent chunk finishes loading.
- A preloaded chunk has medium priority and is instantly downloaded. A prefetched chunk is downloaded while the browser is idle.
- A preloaded chunk should be instantly requested by the parent chunk. 
- A prefetched chunk can be used anytime in the future.
Browser support is different.

### Bundle Analysis 
- webpack-chart: Interactive pie chart for webpack stats.
webpack-visualizer: Visualize and analyze your bundles to see which modules are taking up space and which might be duplicates.
- webpack-bundle-analyzer: A plugin and CLI utility that represents bundle content as a convenient interactive zoomable treemap.
- webpack bundle optimize helper: This tool will analyze your bundle and give you actionable suggestions on what to improve to reduce your bundle size.
bundle-stats: Generate a bundle report(bundle size, assets, modules) and compare the results between different builds.
- webpack-stats-viewer: A plugin with build for webpack stats. Show more information about webpack bundle detail.






