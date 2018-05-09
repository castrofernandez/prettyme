(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("prettyme", [], factory);
	else if(typeof exports === 'object')
		exports["prettyme"] = factory();
	else
		root["prettyme"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdateprettyme"];
/******/ 	window["webpackHotUpdateprettyme"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined")
/******/ 				return reject(new Error("No browser support"));
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "e73a2e47613e742e0e9f"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) me.children.push(request);
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle")
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			{
/******/ 				// eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cssme/src/index.js":
/*!*****************************************!*\
  !*** ./node_modules/cssme/src/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class CSSMe {
  load(rules = {}) {
    if (typeof window === 'undefined') {
      return;
    }

    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = this.stringify(rules);
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  stringify(rules = {}) {
    const output = [];
    const stack = this.getEmptyStack(rules);

    let current, rule, value, selector;

    while (stack.length > 0) {
      current = stack.shift();

      for (rule in current.rules) {
        value = current.rules[rule];

        if (this.isObject(value)) {
          rule.split(',').forEach(segment => {
            stack.push({
              rules: value,
              nestedSelectors: this.replaceAmpersand(segment.trim(), current.nestedSelectors)
            });
          });
        } else {
          selector = this.getSelector(current.nestedSelectors);
          output[selector] = output[selector] || [];
          output[selector].push({
            property: rule,
            value: value
          });
        }
      }
    }

    return this.formatOutput(output);
  }

  replaceAmpersand(rule, nestedSelectors) {
    if (!rule.includes('&') || nestedSelectors.length === 0) {
      return nestedSelectors.concat(rule);
    }

    const last = nestedSelectors[nestedSelectors.length - 1];
    const selector = rule.replace(/&/g, last);

    return nestedSelectors.slice(0, -1).concat(selector);
  }

  getEmptyStack(rules) {
    return [{
      rules: rules,
      nestedSelectors: []
    }];
  }

  formatOutput(output) {
    const formatted = [];
    const that = this;

    Object.keys(output).map(function(selector) {
      formatted.push(selector);
      that.formatDeclarations(formatted, output[selector]);
    });

    return formatted.join('');
  }

  formatDeclarations(output, declarations) {
    output.push('{');

    declarations.map(function(declaration) {
      output.push(
        declaration.property,
        ':',
        declaration.value,
        ';'
      );
    });

    output.push('}');
  }

  getSelector(nestedSelectors) {
    return nestedSelectors.join(' ');
  }

  isObject(obj) {
    return obj instanceof Object;
  }
}

module.exports = new CSSMe();


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://pegjs.org/documentation

const cssme = __webpack_require__(/*! cssme */ "./node_modules/cssme/src/index.js");
const globalStyles = __webpack_require__(/*! ./styles/base/prettyme */ "./src/styles/base/prettyme.js");
const Language = __webpack_require__(/*! ./lexers/language */ "./src/lexers/language.js");

const DefaultTheme = 'default';

const defaultOptions = {
  language: null,
  selector: '.prettyme'
};

class Prettyme {
  constructor() {
    this.options = null;
  }

  get language() {
    return this.options.language;
  }

  get lexer() {
    return this.languageConfig ? this.languageConfig.lexer : null;
  }

  get languageConfig() {
    return Language.get(this.language);
  }

  get theme() {
    return this.options.theme || 'default';
  }

  get themeName() {
    return this.isObject(this.theme) ? this.theme.name : this.theme;
  }

  get showLines() {
    return !!this.options.lines;
  }

  init(customOptions) {
    this.options = null;
    this.setOptions(customOptions);
    this.loadStyles();
  }

  load(customOptions) {
    this.setOptions(customOptions);
    this.loadStyles();

    let previews = document.querySelectorAll(this.options.selector);
    let length = previews.length;
    let preview, i;
    let container;

    for (i = 0; i < length; i++) {
      preview = previews[i];
      container = this.getContainer(preview);
      this.addTheme(container);

      container.innerHTML = this.highlight(preview.innerHTML, this.options);
    }
  }

  addTheme(container) {
    const theme = `theme-${this.themeName}`;
    const classes = new Set(container.className.split(' '));

    classes.add(theme);

    if (this.showLines) {
      classes.add('numbered');
    }

    container.className = Array.from(classes).join(' ');
  }

  getContainer(element) {
    if (element.tagName.toLowerCase() === 'script' && element.getAttribute('type') === 'codeme') {
      const div = document.createElement('div');
      div.className = element.className;
      element.parentNode.insertBefore(div, element.nextSibling);

      return div;
    }

    return element;
  }

  highlight(code, customOptions) {
    this.setOptions(customOptions);
    this.loadStyles();
    this.checkLanguage();

    return this.lexer.highlight(code, this.options);
  }

  setOptions(customOptions) {
    if (!this.options) {
      this.options = Object.assign({}, defaultOptions);
    }

    for (let option in customOptions) {
      this.options[option] = customOptions[option];
    }

    if (customOptions && customOptions.language) {
      this.checkLanguage();
    }
  }

  loadStyles() {
    const theme = this.getThemeSettings(this.theme);

    cssme.load(globalStyles(theme));
    this.loadLanguageStyles(theme);
  }

  loadLanguageStyles(theme) {
    this.languageConfig.loadStyles(theme);
  }

  getThemeSettings(theme = DefaultTheme) {
    return this.isObject(theme) ? this.formatCustomTheme(theme) : __webpack_require__("./src/styles/themes sync recursive ^\\.\\/.*$")(`./${theme}`);
  }

  getDefaultThemeSettings() {
    return this.getThemeSettings(DefaultTheme);
  }

  formatCustomTheme(theme) {
    const defaultTheme = this.getDefaultThemeSettings();
    const output = {};

    for (let key in theme) {
      output[key] = this.isObject(theme[key]) ? Object.assign(defaultTheme[key] || {}, theme[key]) : theme[key];
    }

    return output;
  }

  isObject(obj) {
    return obj instanceof Object;
  }

  checkLanguage() {
    if (!this.languageConfig) {
      throw new Error(`Invalid language "${this.language}". Loaded languages are: ${Language.languages.join(', ')}`);
    }
  }
};

if (true) {
  module.exports = new Prettyme();
}

/***/ }),

/***/ "./src/lexers/language.js":
/*!********************************!*\
  !*** ./src/lexers/language.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const cssme = __webpack_require__(/*! cssme */ "./node_modules/cssme/src/index.js");

class Language {
  constructor(options) {
    this.options = options;

    this.init();
  }

  get name() {
    return this.options.name;
  }

  get lexer() {
    return this.options.lexer;
  }

  get styles() {
    return __webpack_require__("./src/styles/languages sync recursive ^\\.\\/.*$")(`./${this.name}`);
  }

  init() {
    const global = Language.getGlobal();

    if (global) {
      global._prettymeLanguages[this.name] = this;
    }
  }

  loadStyles(theme) {
    if (typeof window === 'undefined') {
      return;
    }

    const styles = this.styles(theme);

    cssme.load(styles);
  }

  static getGlobal() {
    if (typeof global !== 'undefined') {
      return Language.setGlobal(global);
    }

    if (typeof window !== 'undefined') {
      return Language.setGlobal(window);
    }

    return null;
  }

  static setGlobal(variable) {
    if (!variable._prettymeLanguages) {
      variable._prettymeLanguages = {};
    }

    return variable;
  }

  static get(name) {
    const global = this.getGlobal();

    return global ? global._prettymeLanguages[name] : null;
  }

  static get languages() {
    return global ? Object.keys(global._prettymeLanguages) : [];
  }
}

if (true) {
  module.exports = Language;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/styles/base/language.js":
/*!*************************************!*\
  !*** ./src/styles/base/language.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = settings => {
  return {
    '.prettyme': {
      color: settings.colors.secondary,

      '.comment': {
        color: settings.colors.comment
      },

      '.name': {
        color: settings.colors.name
      },

      '.delimiter': {
        color: settings.colors.delimiter
      },

      '.string': {
        color: settings.colors.text
      },

      '.number': {
        color: settings.colors.number
      },

      '.object': {
        color: settings.colors.object
      },

      '.reserved': {
        color: settings.colors.reserved
      },

      '.function.name:not(.reserved)': {
        color: settings.colors.function
      },

      '.null': {
        color: settings.colors.null
      },

      '.boolean': {
        color: settings.colors.boolean
      }
    }
  };
};

/***/ }),

/***/ "./src/styles/base/prettyme.js":
/*!*************************************!*\
  !*** ./src/styles/base/prettyme.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = settings => {
  const output = {};

  output[`.prettyme.theme-${settings.name}`] = {
    'background-color': settings.colors.background,
    color: settings.colors['default-dark'],
    position: 'relative',

    '.token-wrapper': {
      display: 'inline-block',

      i: {
        'font-style': 'normal'
      }
    },

    '&.numbered': {
      'counter-reset': 'lines',

      '.line': {
        position: 'relative',

        '&::before': {
          'counter-increment': 'lines',
          content: 'counter(lines)',
          position: 'absolute',
          left: '-80px',
          'text-align': 'right',
          color: settings.colors['line-number'],
          'min-width': '40px'
        }
      }
    }
  };

  return output;
};

/***/ }),

/***/ "./src/styles/languages sync recursive ^\\.\\/.*$":
/*!********************************************!*\
  !*** ./src/styles/languages sync ^\.\/.*$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./css": "./src/styles/languages/css.js",
	"./css.js": "./src/styles/languages/css.js",
	"./html": "./src/styles/languages/html.js",
	"./html.js": "./src/styles/languages/html.js",
	"./javascript": "./src/styles/languages/javascript.js",
	"./javascript.js": "./src/styles/languages/javascript.js",
	"./json": "./src/styles/languages/json.js",
	"./json.js": "./src/styles/languages/json.js",
	"./markdown": "./src/styles/languages/markdown.js",
	"./markdown.js": "./src/styles/languages/markdown.js",
	"./php": "./src/styles/languages/php.js",
	"./php.js": "./src/styles/languages/php.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/styles/languages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/styles/languages/css.js":
/*!*************************************!*\
  !*** ./src/styles/languages/css.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = settings => {
  return {
    '.prettyme.css': {
      color: settings.colors.primary,

      '.comment': {
        color: settings.colors.default
      },

      ':not(.comment)': {
        '&.property, &.word.in-bracket:not(.value)': {
          color: settings.colors.secondary
        },

        '&.value, &.in-value, &.word.in-value:not(.property)': {
          color: settings.colors.tertiary
        },

        '&.color': {
          color: settings.colors.color
        },

        '&.function': {
          color: settings.colors.function
        },

        '&.number, &.unit': {
          color: settings.colors.number
        },

        '&.text': {
          color: settings.colors.text
        },

        '&.delimiter': {
          color: settings.colors.delimiter
        },

        '&.selector': {
          color: settings.colors.tag
        }
      }
    }
  };
};

/***/ }),

/***/ "./src/styles/languages/html.js":
/*!**************************************!*\
  !*** ./src/styles/languages/html.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = settings => {
  return {
    '.prettyme.html': {
      color: settings.colors['default-dark'],

      '.comment': {
        color: settings.colors.comment,
        'font-style': 'italic'
      },

      '&.delimiter, &.comment': {
        color: settings.colors.delimiter
      },

      '.in-angle': {
        '&.tag': {
          color: settings.colors.tag
        },

        '&.attribute': {
          color: settings.colors.name
        },

        '&.value': {
          color: settings.colors.tertiary
        }
      }
    }
  };
};

/***/ }),

/***/ "./src/styles/languages/javascript.js":
/*!********************************************!*\
  !*** ./src/styles/languages/javascript.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const LanguageCSS = __webpack_require__(/*! ../base/language */ "./src/styles/base/language.js");

const styles = settings => {
  return {
    '.prettyme.javascript': {
      '.regex': {
        color: settings.colors.regex
      },

      '.string-template': {
        '&:not(.string-template-parameter)': {
          color: settings.colors.text
        }
      }
    }
  };
};

module.exports = settings => Object.assign(LanguageCSS(settings), styles(settings));

/***/ }),

/***/ "./src/styles/languages/json.js":
/*!**************************************!*\
  !*** ./src/styles/languages/json.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const styles = {};

for (let i = 0; i < 10; i++) {
  styles[`.tab.tab${i}x`] = {
    'padding-left': `${40 * i}px`
  };
}

module.exports = settings => {
  return {
    '.prettyme.json': Object.assign(styles, {
      '.property.string': {
        color: settings.colors.name
      },

      '.number': {
        color: settings.colors.number
      },

      '.string': {
        color: settings.colors.text
      },

      '.null': {
        color: settings.colors.null
      },

      '.true, .false': {
        color: settings.colors.boolean
      }
    })
  };
};

/***/ }),

/***/ "./src/styles/languages/markdown.js":
/*!******************************************!*\
  !*** ./src/styles/languages/markdown.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = settings => {
  return {
    '.prettyme.markdown': {
      '.header': {
        '.a': {
          color: settings.colors.primary
        }
      },

      '.bold': {
        'font-weight': '700',
        color: settings.colors.color
      },

      '.italic': {
        'font-style': 'italic',
        color: settings.colors.secondary
      },

      '.list': {
        '&.ul-list, &.ol-list': {
          i: {
            color: settings.colors.tertiary
          }
        }
      },

      '.link': {
        i: {
          color: settings.colors.function,

          '&.b': {
            color: settings.colors.text
          },

          '&.p': {
            color: settings.colors.color
          }
        },

        '.u': {
          color: settings.colors.primary
        }
      },

      '.code-inline': {
        color: settings.colors.function
      },

      '.code': {
        color: settings.colors.number,

        i: {
          color: settings.colors.text
        }
      },

      '.quote': {
        i: {
          color: settings.colors.number
        }
      }
    }
  };
};

/***/ }),

/***/ "./src/styles/languages/php.js":
/*!*************************************!*\
  !*** ./src/styles/languages/php.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const LanguageCSS = __webpack_require__(/*! ../base/language */ "./src/styles/base/language.js");

const styles = settings => {
  return {
    '.prettyme.php': {
      '.tag': {
        color: settings.colors.tag
      }
    }
  };
};

module.exports = settings => Object.assign(LanguageCSS(settings), styles(settings));

/***/ }),

/***/ "./src/styles/themes sync recursive ^\\.\\/.*$":
/*!*****************************************!*\
  !*** ./src/styles/themes sync ^\.\/.*$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dark": "./src/styles/themes/dark.js",
	"./dark.js": "./src/styles/themes/dark.js",
	"./default": "./src/styles/themes/default.js",
	"./default.js": "./src/styles/themes/default.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/styles/themes sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/styles/themes/dark.js":
/*!***********************************!*\
  !*** ./src/styles/themes/dark.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  name: 'dark',
  colors: {
    'background': '#444',
    'line-number': '#aaa',
    'default': '#aaa',
    'default-dark': '#777',

    'primary': '#1a8cff',
    'secondary': '#06c0f9',
    'tertiary': '#ffbf00',

    'delimiter': '#999',
    'name': '#06c0f9',
    'object': '#ff667d',
    'tag': '#1a8cff',
    'color': '#ff66a3',
    'function': '#9f81f7',
    'number': '#00cca3',
    'text': '#ff80d5',
    'comment': '#aaa',
    'null': '#06ade0',
    'boolean': '#ffbf00',
    'reserved': '#1a8cff',
    'regex': '#ffbf00'
  }
};

/***/ }),

/***/ "./src/styles/themes/default.js":
/*!**************************************!*\
  !*** ./src/styles/themes/default.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  name: 'default',
  colors: {
    'background': 'transparent',
    'line-number': '#aaa',
    'default': '#aaa',
    'default-dark': '#777',

    'primary': '#1a8cff',
    'secondary': '#06c0f9',
    'tertiary': '#ffbf00',

    'delimiter': '#999',
    'name': '#06c0f9',
    'object': '#ff667d',
    'tag': '#1a8cff',
    'color': '#ff66a3',
    'function': '#9f81f7',
    'number': '#00cca3',
    'text': '#ff80d5',
    'comment': '#aaa',
    'null': '#06ade0',
    'boolean': '#ffbf00',
    'reserved': '#1a8cff',
    'regex': '#ffbf00'
  }
};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/juancastrofernandez/Desarrollo/Github/prettyme/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=prettyme.js.map