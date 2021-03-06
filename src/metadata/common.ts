/**
 * Copyright 2018, leezhenghui@gmail.com.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *
 * @module Provides proxify wrapper relevant common metadata definitions
 *
 */

import * as Debug from 'debug';

const debug: Debug.IDebugger = Debug('proxify:metadata:common');

export enum InteractionStyleType {
  UNKNOWN = 0,
  SYNC = 1,
  ASYNC = 2,
}

export const isComponentManagedProp: string = '__is_component_managed__';

export const isCallbackWrappedProp: string = '__is_callback_wrapped__';

export const isBindWrappedProp: string = '__is_bind_wrapped__';
