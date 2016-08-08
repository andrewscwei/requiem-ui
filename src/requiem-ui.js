/*! Requiem-UI, @license MIT */
'use strict';

import MasonryGrid from './ui/MasonryGrid';

/**
 * @module requiem-ui
 */
function requiem() {
  if (arguments.length > 0)
    return dom.register.apply(null, arguments);
  else
    return dom.sightread.apply(null, arguments);
}

requiem.version = '0.1.0';
requiem.MasonryGrid = MasonryGrid;

module.exports = requiem;
