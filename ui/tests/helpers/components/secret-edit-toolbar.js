/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import { click } from '@ember/test-helpers';
import { GENERAL } from 'vault/tests/helpers/general-selectors';
const SELECTORS = {
  dropdown: '[data-test-copy-menu-trigger]',
};
export async function assertSecretWrap(assert, server, path) {
  server.get(path, () => {
    assert.ok(true, `request made to ${path} when wrapping secret`);
  });
  await click(SELECTORS.dropdown);
  await click(GENERAL.button('wrap'));
}
