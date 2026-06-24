import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import destr from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestURL, setResponseStatus, getResponseHeader, setResponseHeaders, send, getRequestHeader, removeResponseHeader, createError, appendResponseHeader, setResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/h3@1.15.5/node_modules/h3/dist/index.mjs';
import { createHooks } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/node-mock-http@1.0.4/node_modules/node-mock-http/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/ufo@1.6.3/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/unstorage@1.17.4_db0@0.3.4_ioredis@5.10.0/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/unstorage@1.17.4_db0@0.3.4_ioredis@5.10.0/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/unstorage@1.17.4_db0@0.3.4_ioredis@5.10.0/node_modules/unstorage/drivers/fs-lite.mjs';
import { digest } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"/home/dave/Workspace/zenkai-web/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/dave/Workspace/zenkai-web"}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/dave/Workspace/zenkai-web"}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/dave/Workspace/zenkai-web/.nitro"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/dave/Workspace/zenkai-web/.nitro/cache"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$0 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const plugins = [
  
];

const assets = {
  "/_redirects": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"18-+oL+Es1XZdIOibUzsrl9W9r73L0\"",
    "mtime": "2026-06-24T13:59:31.333Z",
    "size": 24,
    "path": "../../.output/public/_redirects"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"298-hdW7/pL89QptiszdYCHH67XxLxs\"",
    "mtime": "2026-06-24T13:59:31.333Z",
    "size": 664,
    "path": "../../.output/public/favicon.ico"
  },
  "/og.svg": {
    "type": "image/svg+xml",
    "etag": "\"365-+D99KR4wrNPweAesj7ZPA2vUAkU\"",
    "mtime": "2026-06-24T13:59:31.333Z",
    "size": 869,
    "path": "../../.output/public/og.svg"
  },
  "/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"b6c-7v5aaYLFINXGaOUTvwixNSiJ6vk\"",
    "mtime": "2026-06-24T13:59:31.329Z",
    "size": 2924,
    "path": "../../.output/public/.vite/manifest.json"
  },
  "/imgs/adwaita-dark.png": {
    "type": "image/png",
    "etag": "\"11c41-Grbu5+CM9ywGLkGuN4OGu3ZuZd8\"",
    "mtime": "2026-06-24T13:59:31.329Z",
    "size": 72769,
    "path": "../../.output/public/imgs/adwaita-dark.png"
  },
  "/imgs/adwaita.png": {
    "type": "image/png",
    "etag": "\"11ce4-jrL2NH9in5OTkSJQRHN0dfFJVis\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 72932,
    "path": "../../.output/public/imgs/adwaita.png"
  },
  "/og-image.png": {
    "type": "image/png",
    "etag": "\"415c3-g1Ftz0VRdHw6MpKNcoHUIPnq/Zk\"",
    "mtime": "2026-06-24T13:59:31.333Z",
    "size": 267715,
    "path": "../../.output/public/og-image.png"
  },
  "/logo_large.png": {
    "type": "image/png",
    "etag": "\"4ca93-jkc6ZWlMybNpVaCWicgGdoY3hIE\"",
    "mtime": "2026-06-24T13:59:31.333Z",
    "size": 314003,
    "path": "../../.output/public/logo_large.png"
  },
  "/imgs/arc-dark.png": {
    "type": "image/png",
    "etag": "\"11cf4-Kk6qNTW8MoGfEVFf+MOezelKzQg\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 72948,
    "path": "../../.output/public/imgs/arc-dark.png"
  },
  "/imgs/ayu-dark copy.png": {
    "type": "image/png",
    "etag": "\"11f07-SM7uHu84utE3uotxXM5W8KcNd7A\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 73479,
    "path": "../../.output/public/imgs/ayu-dark copy.png"
  },
  "/imgs/ayu-dark.png": {
    "type": "image/png",
    "etag": "\"11f07-SM7uHu84utE3uotxXM5W8KcNd7A\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 73479,
    "path": "../../.output/public/imgs/ayu-dark.png"
  },
  "/imgs/ayu-mirage.png": {
    "type": "image/png",
    "etag": "\"10e63-P4yD9tnlmhMt6jUlCrzdzdk6Jbg\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 69219,
    "path": "../../.output/public/imgs/ayu-mirage.png"
  },
  "/imgs/breeze-dark.png": {
    "type": "image/png",
    "etag": "\"10d02-4x9R/m1BVZLU4QkvUQINwrl8usk\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 68866,
    "path": "../../.output/public/imgs/breeze-dark.png"
  },
  "/imgs/bulma.png": {
    "type": "image/png",
    "etag": "\"10383-ucCYsXpfW5oA3JvfV5h/Vd35X9A\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 66435,
    "path": "../../.output/public/imgs/bulma.png"
  },
  "/imgs/breeze-light.png": {
    "type": "image/png",
    "etag": "\"11e65-gIRUtlhEy6OsQTFrl9DnybRqTVM\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 73317,
    "path": "../../.output/public/imgs/breeze-light.png"
  },
  "/imgs/catppuccin-frappe.png": {
    "type": "image/png",
    "etag": "\"13159-gyhKkeq8FJ4e8EHZOTu5B6u24DE\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 78169,
    "path": "../../.output/public/imgs/catppuccin-frappe.png"
  },
  "/imgs/buu.png": {
    "type": "image/png",
    "etag": "\"10a8f-E9XDzZdZsn9Iih+lJfds0anqIow\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 68239,
    "path": "../../.output/public/imgs/buu.png"
  },
  "/imgs/catppuccin-latte.png": {
    "type": "image/png",
    "etag": "\"115ee-LrBvfYQPVvbbabXVqJhLDLCvPaQ\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 71150,
    "path": "../../.output/public/imgs/catppuccin-latte.png"
  },
  "/imgs/catppuccin.png": {
    "type": "image/png",
    "etag": "\"11136-s4L+ia86E4/sxf7Gf6Cd57uyqy8\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 69942,
    "path": "../../.output/public/imgs/catppuccin.png"
  },
  "/imgs/catppuccin-macchiato.png": {
    "type": "image/png",
    "etag": "\"12b1a-TyjaYXHG/EvpxGno+WlfnOjthmY\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 76570,
    "path": "../../.output/public/imgs/catppuccin-macchiato.png"
  },
  "/imgs/cobalt.png": {
    "type": "image/png",
    "etag": "\"117da-i9WLI1lMZFiDN3AJKc0YrC/Bz78\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 71642,
    "path": "../../.output/public/imgs/cobalt.png"
  },
  "/imgs/cupertino-dark.png": {
    "type": "image/png",
    "etag": "\"11ed7-rkWhZ212NZ4J37Zwqm5gD7mN91k\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 73431,
    "path": "../../.output/public/imgs/cupertino-dark.png"
  },
  "/imgs/cupertino.png": {
    "type": "image/png",
    "etag": "\"11dda-8ShJtiENPQe0T+PZ9hKqq1iwBqM\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 73178,
    "path": "../../.output/public/imgs/cupertino.png"
  },
  "/imgs/dark.png": {
    "type": "image/png",
    "etag": "\"126fb-zODe3ZYtbI9mc1LQU8VVYIoXhKU\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 75515,
    "path": "../../.output/public/imgs/dark.png"
  },
  "/imgs/dracula.png": {
    "type": "image/png",
    "etag": "\"1180d-Tk3iNjqf/ZkmCyIsJpgtUT2KRb0\"",
    "mtime": "2026-06-24T13:59:31.330Z",
    "size": 71693,
    "path": "../../.output/public/imgs/dracula.png"
  },
  "/imgs/github-light.png": {
    "type": "image/png",
    "etag": "\"118b4-uvVNVUmnhD9tb8AYFqOfYttge/s\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 71860,
    "path": "../../.output/public/imgs/github-light.png"
  },
  "/imgs/github-dark.png": {
    "type": "image/png",
    "etag": "\"10a5d-VDAIK6mNtpGsoDiWdtPapiru70A\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 68189,
    "path": "../../.output/public/imgs/github-dark.png"
  },
  "/imgs/frieza.png": {
    "type": "image/png",
    "etag": "\"1233b-9JVo3Y5IVLwEo/3sWfsLp1hB/YU\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 74555,
    "path": "../../.output/public/imgs/frieza.png"
  },
  "/imgs/everforest.png": {
    "type": "image/png",
    "etag": "\"1128c-/vVyPL37qSUkqAkJFu8kurwt2pM\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 70284,
    "path": "../../.output/public/imgs/everforest.png"
  },
  "/imgs/gohan.png": {
    "type": "image/png",
    "etag": "\"10a56-Tn69FkjN1fT/1xmobetAGUGEZc8\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 68182,
    "path": "../../.output/public/imgs/gohan.png"
  },
  "/imgs/goku.png": {
    "type": "image/png",
    "etag": "\"f730-rPoFFjt3p0bDY/TNmosjR5rn7NU\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 63280,
    "path": "../../.output/public/imgs/goku.png"
  },
  "/imgs/gruvbox.png": {
    "type": "image/png",
    "etag": "\"124cb-+brwZtcAmLYBvSBmqCGIA13oy3Q\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 74955,
    "path": "../../.output/public/imgs/gruvbox.png"
  },
  "/imgs/high-contrast-dark.png": {
    "type": "image/png",
    "etag": "\"12474-HMD74O3bESyZv7l6eRCFvi5xG2E\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 74868,
    "path": "../../.output/public/imgs/high-contrast-dark.png"
  },
  "/imgs/high-contrast-light.png": {
    "type": "image/png",
    "etag": "\"13aed-tztXxFPPsvHuxpslTWu6dRo7VJ0\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 80621,
    "path": "../../.output/public/imgs/high-contrast-light.png"
  },
  "/imgs/high-contrast.png": {
    "type": "image/png",
    "etag": "\"11903-yHCrBdFE7LXy7HXtTRaVj2aV4Ys\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 71939,
    "path": "../../.output/public/imgs/high-contrast.png"
  },
  "/imgs/kanagawa-dragon.png": {
    "type": "image/png",
    "etag": "\"10c98-v//pQxIYvL48P6KlSLR2WvRcUm4\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 68760,
    "path": "../../.output/public/imgs/kanagawa-dragon.png"
  },
  "/imgs/kanagawa-lotus.png": {
    "type": "image/png",
    "etag": "\"12006-gvdmggrwhD93UbWMmX+O3a99byQ\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 73734,
    "path": "../../.output/public/imgs/kanagawa-lotus.png"
  },
  "/imgs/kanagawa.png": {
    "type": "image/png",
    "etag": "\"11ad1-LwB8l4jihy+LBZnhHYyrmULz2d0\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 72401,
    "path": "../../.output/public/imgs/kanagawa.png"
  },
  "/imgs/light.png": {
    "type": "image/png",
    "etag": "\"13ed2-WFJyARrAyXSXFidmNwMIWL1Ih54\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 81618,
    "path": "../../.output/public/imgs/light.png"
  },
  "/imgs/material.png": {
    "type": "image/png",
    "etag": "\"11a18-SXAzYpatEAg2u0DtomTePhiRnXg\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 72216,
    "path": "../../.output/public/imgs/material.png"
  },
  "/imgs/matrix.png": {
    "type": "image/png",
    "etag": "\"f4e8-S57xtQM1rC8m3HaY4JzjeM9Hhn0\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 62696,
    "path": "../../.output/public/imgs/matrix.png"
  },
  "/imgs/logo.png": {
    "type": "image/png",
    "etag": "\"238f5-1cRq7X2iz/XxL1tUoPLfXF3uTgA\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 145653,
    "path": "../../.output/public/imgs/logo.png"
  },
  "/imgs/minimal-light.png": {
    "type": "image/png",
    "etag": "\"13a27-Q7FiUOnHLm92Hks2W/Ca3kmGs8w\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 80423,
    "path": "../../.output/public/imgs/minimal-light.png"
  },
  "/imgs/minimal.png": {
    "type": "image/png",
    "etag": "\"11ae1-koDuK0+5jLcjGxgkRUHLni6mQr8\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 72417,
    "path": "../../.output/public/imgs/minimal.png"
  },
  "/imgs/monokai-pro.png": {
    "type": "image/png",
    "etag": "\"14eb6-tQDs5yBTABxn+XN0xvxNIYlttKI\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 85686,
    "path": "../../.output/public/imgs/monokai-pro.png"
  },
  "/imgs/monokai.png": {
    "type": "image/png",
    "etag": "\"14ede-0ZSsYQ/Ac8plo0fsI1QmCIJ5wV0\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 85726,
    "path": "../../.output/public/imgs/monokai.png"
  },
  "/imgs/night-owl.png": {
    "type": "image/png",
    "etag": "\"155d3-Qbtci3sshRYGpI5bV7cGjQdAaFA\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 87507,
    "path": "../../.output/public/imgs/night-owl.png"
  },
  "/imgs/nord.png": {
    "type": "image/png",
    "etag": "\"1530b-1W0rrjR5ZG2XpAwRdYynOVIRmS4\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 86795,
    "path": "../../.output/public/imgs/nord.png"
  },
  "/imgs/noctis.png": {
    "type": "image/png",
    "etag": "\"151fb-Ai1u3rV0ibonRrmCajvvuSFcDPQ\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 86523,
    "path": "../../.output/public/imgs/noctis.png"
  },
  "/imgs/launchpad.png": {
    "type": "image/png",
    "etag": "\"a6a97-D6WbFP/YIE33K0ttilLk6KDduK0\"",
    "mtime": "2026-06-24T13:59:31.331Z",
    "size": 682647,
    "path": "../../.output/public/imgs/launchpad.png"
  },
  "/imgs/one-dark.png": {
    "type": "image/png",
    "etag": "\"14d16-6JUc3MIK6MZ0cSyyxHlLlW5YQEM\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 85270,
    "path": "../../.output/public/imgs/one-dark.png"
  },
  "/imgs/palenight.png": {
    "type": "image/png",
    "etag": "\"15318-2/DiDLEuNk5pPDyOzImOFze4zUA\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 86808,
    "path": "../../.output/public/imgs/palenight.png"
  },
  "/imgs/piccolo.png": {
    "type": "image/png",
    "etag": "\"13904-jT1YiT52ODJI2OvDyYnCPg3k2cE\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 80132,
    "path": "../../.output/public/imgs/piccolo.png"
  },
  "/imgs/one-light.png": {
    "type": "image/png",
    "etag": "\"15b80-ac7kgYakpsYvDLGZIbZDxqBCaoc\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 88960,
    "path": "../../.output/public/imgs/one-light.png"
  },
  "/imgs/poimandres.png": {
    "type": "image/png",
    "etag": "\"14c88-OeoRvoR3X2hy45dTrDZuv/icEq8\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 85128,
    "path": "../../.output/public/imgs/poimandres.png"
  },
  "/imgs/retro.png": {
    "type": "image/png",
    "etag": "\"14364-GrIGEZ+iIJinWbfTwVZrFt9YxSI\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 82788,
    "path": "../../.output/public/imgs/retro.png"
  },
  "/imgs/rose-pine-dawn.png": {
    "type": "image/png",
    "etag": "\"155c7-jfgNs2U+Fc2nnqG9YeDwQTtOGGI\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 87495,
    "path": "../../.output/public/imgs/rose-pine-dawn.png"
  },
  "/imgs/rose-pine.png": {
    "type": "image/png",
    "etag": "\"14560-STT/GY8u6zYVeUGqfT9YBCoTUS4\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 83296,
    "path": "../../.output/public/imgs/rose-pine.png"
  },
  "/imgs/shades-of-purple.png": {
    "type": "image/png",
    "etag": "\"14608-eZyDv50uDj2mQwZKH2ywcUMA77A\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 83464,
    "path": "../../.output/public/imgs/shades-of-purple.png"
  },
  "/imgs/solarized-dark.png": {
    "type": "image/png",
    "etag": "\"1592e-mPgE48yf4HA5HbyQPyYPdDRxXAw\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 88366,
    "path": "../../.output/public/imgs/solarized-dark.png"
  },
  "/imgs/sweet.png": {
    "type": "image/png",
    "etag": "\"150dd-uur49eMLWbiyxzwr9wHb1ckib2A\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 86237,
    "path": "../../.output/public/imgs/sweet.png"
  },
  "/imgs/solarized-light.png": {
    "type": "image/png",
    "etag": "\"154fc-d+tr9b4qD82h7u0E5CSrriXhUEw\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 87292,
    "path": "../../.output/public/imgs/solarized-light.png"
  },
  "/imgs/spacegray.png": {
    "type": "image/png",
    "etag": "\"148f7-50aP0+/qfDpA940+fWlGSOUFbWg\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 84215,
    "path": "../../.output/public/imgs/spacegray.png"
  },
  "/imgs/tien.png": {
    "type": "image/png",
    "etag": "\"14c84-78DkQTcUfod58Vfng26P4ZP8UyU\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 85124,
    "path": "../../.output/public/imgs/tien.png"
  },
  "/imgs/synthwave84.png": {
    "type": "image/png",
    "etag": "\"14533-2imXMMbNb0SZWP24FXiAKdiXTaQ\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 83251,
    "path": "../../.output/public/imgs/synthwave84.png"
  },
  "/imgs/tokyo-night-moon.png": {
    "type": "image/png",
    "etag": "\"15171-kz3+RqxnJuseDgYhHowsBnifGyI\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 86385,
    "path": "../../.output/public/imgs/tokyo-night-moon.png"
  },
  "/imgs/tokyo-night-light.png": {
    "type": "image/png",
    "etag": "\"15415-VXulAKSelrJqpxy54rBwwEDPDx4\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 87061,
    "path": "../../.output/public/imgs/tokyo-night-light.png"
  },
  "/imgs/tokyo-night-storm.png": {
    "type": "image/png",
    "etag": "\"14e6e-M7HuxM8MUCtnp8OnSF6a5y0aKW4\"",
    "mtime": "2026-06-24T13:59:31.332Z",
    "size": 85614,
    "path": "../../.output/public/imgs/tokyo-night-storm.png"
  },
  "/imgs/tokyonight.png": {
    "type": "image/png",
    "etag": "\"13ed2-RmLOOFy1PUnG+P2JjstZdMeE4qM\"",
    "mtime": "2026-06-24T13:59:31.333Z",
    "size": 81618,
    "path": "../../.output/public/imgs/tokyonight.png"
  },
  "/imgs/trunks.png": {
    "type": "image/png",
    "etag": "\"14535-MwcAC/hZYsg12Bg7oABeyY1f140\"",
    "mtime": "2026-06-24T13:59:31.333Z",
    "size": 83253,
    "path": "../../.output/public/imgs/trunks.png"
  },
  "/imgs/ubuntu-dark.png": {
    "type": "image/png",
    "etag": "\"143c7-Ijggb1DA4VFn0UOQDZPs3i0Iiew\"",
    "mtime": "2026-06-24T13:59:31.333Z",
    "size": 82887,
    "path": "../../.output/public/imgs/ubuntu-dark.png"
  },
  "/imgs/ubuntu.png": {
    "type": "image/png",
    "etag": "\"1559f-7K3tcNF9hSmXNHcQWQMCh5hNMok\"",
    "mtime": "2026-06-24T13:59:31.333Z",
    "size": 87455,
    "path": "../../.output/public/imgs/ubuntu.png"
  },
  "/imgs/vegeta.png": {
    "type": "image/png",
    "etag": "\"14c8a-ve3PyKdMbGjq/G9xZ0u3PIZa1n8\"",
    "mtime": "2026-06-24T13:59:31.333Z",
    "size": 85130,
    "path": "../../.output/public/imgs/vegeta.png"
  },
  "/imgs/win95.png": {
    "type": "image/png",
    "etag": "\"156c4-KHwEMKLFl84UNaN0irAPhUdd5W0\"",
    "mtime": "2026-06-24T13:59:31.333Z",
    "size": 87748,
    "path": "../../.output/public/imgs/win95.png"
  },
  "/_build/assets/HttpStatusCode-DjTx85av.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20-6m70mxigcQrfQOHf/Wz+MEC183U\"",
    "mtime": "2026-06-24T13:59:31.334Z",
    "size": 32,
    "path": "../../.output/public/_build/assets/HttpStatusCode-DjTx85av.js"
  },
  "/_build/assets/_slug_-C5qa0nvb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ab-0oSSoHhnfmGRvmsh07pGiQ9reso\"",
    "mtime": "2026-06-24T13:59:31.334Z",
    "size": 939,
    "path": "../../.output/public/_build/assets/_slug_-C5qa0nvb.js"
  },
  "/_build/assets/_...404_-CRAWfZ_W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"186-axqDfdj5WCocpFE+atqkRf3dM6s\"",
    "mtime": "2026-06-24T13:59:31.333Z",
    "size": 390,
    "path": "../../.output/public/_build/assets/_...404_-CRAWfZ_W.js"
  },
  "/_build/assets/about-CWIoMshG.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"142-YFC3EOCQaL0Cbn8eYT95QLqQW+M\"",
    "mtime": "2026-06-24T13:59:31.334Z",
    "size": 322,
    "path": "../../.output/public/_build/assets/about-CWIoMshG.css"
  },
  "/_build/assets/about-CLn_g2hN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14b-X3Ojf5Q2qvnejxOebbhMMTEmFnk\"",
    "mtime": "2026-06-24T13:59:31.334Z",
    "size": 331,
    "path": "../../.output/public/_build/assets/about-CLn_g2hN.js"
  },
  "/_build/assets/index-BCJRrk1T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3b1-8AUdR+ml5gNlBWiULLAnGsDxPkU\"",
    "mtime": "2026-06-24T13:59:31.334Z",
    "size": 945,
    "path": "../../.output/public/_build/assets/index-BCJRrk1T.js"
  },
  "/_build/assets/index-hvg0EY8G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"dc1-LMcSJKov/t1ZkyfdCtlb1Zr3Feg\"",
    "mtime": "2026-06-24T13:59:31.334Z",
    "size": 3521,
    "path": "../../.output/public/_build/assets/index-hvg0EY8G.js"
  },
  "/_build/assets/entry-client-Bij-xHO7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6863-5SDIsiP7ZyxhxNwLozJ70Ak5Zpo\"",
    "mtime": "2026-06-24T13:59:31.334Z",
    "size": 26723,
    "path": "../../.output/public/_build/assets/entry-client-Bij-xHO7.css"
  },
  "/_build/assets/entry-client-CYn_Kxzy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f3e-uQgL1Oii0+klhSHDBB6ZLDrcCvk\"",
    "mtime": "2026-06-24T13:59:31.335Z",
    "size": 12094,
    "path": "../../.output/public/_build/assets/entry-client-CYn_Kxzy.js"
  },
  "/_build/assets/index-Bv0rQuI4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5834-Xh3yBOK06rj8X8jLRSwkqTpmwo4\"",
    "mtime": "2026-06-24T13:59:31.334Z",
    "size": 22580,
    "path": "../../.output/public/_build/assets/index-Bv0rQuI4.js"
  },
  "/_build/assets/routing-CGC7zva5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c3e-8UGQtzRLPGD9PF9IbP2KdBT4MWE\"",
    "mtime": "2026-06-24T13:59:31.334Z",
    "size": 7230,
    "path": "../../.output/public/_build/assets/routing-CGC7zva5.js"
  },
  "/_build/assets/web-BFJjNbC1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"696d-BfwgbETGfJBLAgNtcuCMPpamsdM\"",
    "mtime": "2026-06-24T13:59:31.335Z",
    "size": 26989,
    "path": "../../.output/public/_build/assets/web-BFJjNbC1.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _hsoFsi = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_PLNJuO = () => import('./chunks/virtual/entry.mjs').then(function (n) { return n.e; });

const handlers = [
  { route: '', handler: _hsoFsi, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_PLNJuO, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const nitroApp = useNitroApp();
const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { closePrerenderer, localFetch };
//# sourceMappingURL=index.mjs.map
