# memory-perf

A microbenchmark of memory usage of Ember Classici Component and Glimmer
Component.

## Methodology

To compare the memory usage, this app renders two components with the same API
and the same internal structure, but using idiomatic Classic and Octane code:

- one argument
- one internal piece of ‘root’ state
    - a plain property in the Classic component
    - a `@tracked` property in the Glimmer component
- seven computed properties
    - implemented with `@computed` in the Classic component
    - implemented as bare getters in the Glimmer component

For running the benchmark, I created a page which rendered *one* of the
component types either 1,000 or 10,000 times, ran a production build, and served
the resulting assets by running `ember serve --path dist`, and took a Chrome
heap snapshot. [`application.hbs`](./app/templates/application.hbs) has both
component invocations; commenting either out gets the equivalent result.

## Results

After running the heap snapshot for 1,000 and 10,000 components each 5× against
each of the Classic and Glimmer component implementations, there appears to be
no meaningful difference in memory usage between Classic components with
computed properties and Glimmer components with tracked state and bare getters.

## Machine info

This test result was generated on a 2019 Retina 5k iMac with the following
configuration:

|  config   |            value            |
| --------- | --------------------------- |
| Processor | 3.7GHz 8-Core Intel Core i9 |
| Memory    | 64GB RAM 2667 MHz DD4       |
| Graphics  | Radeon Pro 580X 8 GB        |
