(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9_playlist,this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_35CC3C9B_2521_93E1_41C1_4C0D0C858A5E.set('selectedIndex', 0); this.playList_35CCEC9B_2521_93E1_41AE_B10515960260.set('selectedIndex', 0); this.playList_35CCBC9B_2521_93E1_4193_67368F036088.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Image_69D0269E_48A6_B27B_419F_63EB850992CF",
  "this.IconButton_45510ACA_53B1_AB6B_41D0_23C3252B8564",
  "this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54",
  "this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0",
  "this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B",
  "this.Container_5DA87ADF_1D90_4D68_4191_AA9873966091"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "scripts": {
  "existsKey": function(key){  return key in window; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "layout": "absolute",
 "verticalAlign": "top",
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "downloadEnabled": false,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "Player468"
 },
 "overflow": "visible",
 "definitions": [{
 "duration": 1000,
 "id": "effect_2A61DDF5_2520_6D21_41BB_4A6A6CB2DDDA",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A615DF1_2520_6D21_41BB_F6132C9CA10B",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1C6DE9_2520_6D21_419F_BA2DA8C52FC0",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A196DD0_2520_6D7F_41B3_40723ADBE6BC",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A197DD0_2520_6D7F_41AB_5CD46A715620",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF2CF60_1DB0_C359_41A6_71F07EF30DED",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF2AF5D_1DB0_C36B_41B7_23D4CC2BF8D1",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF18F5F_1DB0_C367_418C_C988B87DA232",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A62DDF0_2520_6D3F_41B3_4144B40C6FB8",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A61ADF5_2520_6D21_4163_4DE00F23FCD4",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1C2DE9_2520_6D21_41B8_18A61DCCCF70",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "Rooftop Pent House",
 "id": "map_33366870_1DB1_CD39_41A7_6068DD277ED0",
 "minimumZoomFactor": 0.5,
 "thumbnailUrl": "media/map_33366870_1DB1_CD39_41A7_6068DD277ED0_t.png",
 "width": 2500,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "levels": [
   {
    "url": "media/map_33366870_1DB1_CD39_41A7_6068DD277ED0.png",
    "width": 2500,
    "class": "ImageResourceLevel",
    "height": 2500
   },
   {
    "url": "media/map_33366870_1DB1_CD39_41A7_6068DD277ED0_lq.png",
    "width": 256,
    "class": "ImageResourceLevel",
    "height": 256,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "initialZoomFactor": 1,
 "class": "Map",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "height": 2500,
 "overlays": [
  "this.overlay_30F4896A_1DB0_4F29_41AC_44B3550D6C94"
 ]
},
{
 "duration": 1000,
 "id": "effect_2A1DFDE8_2520_6D2F_4182_1F284E1FE9EE",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_01A183FA_1C90_C329_4169_99094A722B2A",
 "thumbnailUrl": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_t.jpg",
 "label": "Ba\u00f1o Pent Garden",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_39A253FA_1C90_C328_41B3_0E4D7F5BAF17"
 ]
},
{
 "duration": 1000,
 "id": "effect_2A1C9DED_2520_6D21_41B6_92608CD24025",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A188DDB_2520_6D61_41BE_5E6E20BBC70D",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1EADE4_2520_6D27_41B5_5C101AB4E236",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A639DEC_2520_6D27_4181_61F34DA38BA5",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_camera"
},
{
 "duration": 1000,
 "id": "effect_2A184DDE_2520_6D63_41B7_9894C2EA695B",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A677DF7_2520_6D21_41C1_A8051D0B07C6",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A186DCF_2520_6D61_41B2_3E8CC523FB2E",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_camera"
},
{
 "duration": 1000,
 "id": "effect_2DF0FF64_1DB0_C359_41BA_B5EB2D51C8FA",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 100.21,
   "yaw": -83.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960"
  },
  {
   "panorama": "this.panorama_009CC655_1C90_457B_4192_D175F0C259A0",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 17.57,
   "yaw": 3.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_07749D79_1C90_C72A_41B3_31D0B8842A07"
  },
  {
   "backwardYaw": 6.38,
   "yaw": 99.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_050B3C58_1C91_C569_41A5_A095E4019938",
 "thumbnailUrl": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_t.jpg",
 "label": "Wet bar",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_050B1C58_1C91_C569_4172_87A004C5CA1D",
  "this.overlay_050B7C58_1C91_C569_4199_F3F1394813A8",
  "this.overlay_3A41EF4B_1C91_C36F_41B3_BA3456E08033",
  "this.overlay_0D380365_1FDB_9F70_4185_4169B500A5B3"
 ]
},
{
 "duration": 1000,
 "id": "effect_2A662DF8_2520_6D2F_41B7_A659977467E5",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A622DEF_2520_6D21_41B4_1FD0AC866347",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A184DD3_2520_6D61_41BB_667F2A148A50",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1D9DE9_2520_6D21_41C2_519A4756EDF1",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_343AACB5_2521_9321_41A9_D506BEAF8C75"
},
{
 "duration": 1000,
 "id": "effect_2DF1BF59_1DB0_C36B_41AC_DA6BD91149E7",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A180DD4_2520_6D67_41A1_0765138C251C",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A185DDE_2520_6D63_4197_AEA7CC2B8D65",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_camera"
},
{
 "duration": 1000,
 "id": "effect_2DF26F5B_1DB0_C36F_4189_5B226CA35880",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "media": "this.panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1D2DE5_2520_6D21_41BC_53B050F6A934, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF1DF5F_1DB0_C367_416E_D9F91C095E49, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A1D1DE5_2520_6D21_41A4_75ED7DBF41B9, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF13F60_1DB0_C359_419D_02056C6FF762, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1DDDE5_2520_6D21_41B5_8E5A40A09E74, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF17F60_1DB0_C359_4193_78DBBB22377E, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF1DF5F_1DB0_C367_416E_D9F91C095E49, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF13F60_1DB0_C359_419D_02056C6FF762, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF17F60_1DB0_C359_4193_78DBBB22377E, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_009CC655_1C90_457B_4192_D175F0C259A0",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1E1DE6_2520_6D23_4197_CF852A27FAD0, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2CF60_1DB0_C359_41A6_71F07EF30DED, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF17801_1DB0_4CDB_419D_C337AC9ABC67, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2A1EEDE6_2520_6D23_4194_A580A81A41C8, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1EFDE6_2520_6D23_4196_32FB78EC3D5B, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF20F61_1DB0_C35B_419E_CA3D402BDCCA, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2CF60_1DB0_C359_41A6_71F07EF30DED, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF17801_1DB0_4CDB_419D_C337AC9ABC67, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF20F61_1DB0_C35B_419E_CA3D402BDCCA, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_009CC655_1C90_457B_4192_D175F0C259A0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_01A183FA_1C90_C329_4169_99094A722B2A",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1EBDE7_2520_6D21_41BF_A21002C71888, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF27F61_1DB0_C35B_41B1_85A485B5107A, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF12802_1DB0_4CD8_41BA_803CBEA65362, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2A1E9DE7_2520_6D21_41BB_AC42776F194B, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1D7DE7_2520_6D21_4181_7F1AD2FC60B4, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1BF62_1DB0_C359_41AF_AC6608437BCD, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF27F61_1DB0_C35B_41B1_85A485B5107A, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF12802_1DB0_4CD8_41BA_803CBEA65362, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1BF62_1DB0_C359_41AF_AC6608437BCD, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A183FA_1C90_C329_4169_99094A722B2A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1D0DE7_2520_6D21_41A9_39B0829DAA22, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF19F62_1DB0_C359_41A7_83FDBBAE5D1F, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF1D803_1DB0_4CD8_41A2_6F86F528D01C, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2A1DEDE8_2520_6D2F_41A5_7067728053FF, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1DFDE8_2520_6D2F_4182_1F284E1FE9EE, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF12F62_1DB0_C359_4179_8EED77B91636, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 4); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF19F62_1DB0_C359_41A7_83FDBBAE5D1F, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF1D803_1DB0_4CD8_41A2_6F86F528D01C, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF12F62_1DB0_C359_4179_8EED77B91636, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06A504E0_1C90_4559_41A1_DED13A185BFF",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2DF1A803_1DB0_4CD8_41AB_D2D871A0762C, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2A1D8DE8_2520_6D2F_41A4_A43BE35F29B0, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A1D9DE9_2520_6D21_41C2_519A4756EDF1, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF11F63_1DB0_C35F_41A3_A5760CE99A86, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1C6DE9_2520_6D21_419F_BA2DA8C52FC0, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF15F63_1DB0_C35F_41A7_049931292AB6, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 4, 5); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2DF1A803_1DB0_4CD8_41AB_D2D871A0762C, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF11F63_1DB0_C35F_41A3_A5760CE99A86, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF15F63_1DB0_C35F_41A7_049931292AB6, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_32176601_1DB0_C4DB_4181_F744C2CFC523, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2A1C2DE9_2520_6D21_41B8_18A61DCCCF70, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A1C0DE9_2520_6D21_41AB_3AE6064B6A38, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_5B9CF303_1DEF_BCD8_4198_C6FBD5324859, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1CFDEA_2520_6D23_41AC_BA1CAC614C73, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_5B9D6303_1DEF_BCD8_41A1_40CF7501689B, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 5, 6); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_32176601_1DB0_C4DB_4181_F744C2CFC523, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_5B9CF303_1DEF_BCD8_4198_C6FBD5324859, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_5B9D6303_1DEF_BCD8_41A1_40CF7501689B, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1C8DEA_2520_6D23_4199_F674C664CB3E, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF08F64_1DB0_C359_418C_1E71C1D3BD66, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A1C9DEA_2520_6D23_418D_5A0C480DB923, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF0FF64_1DB0_C359_41BA_B5EB2D51C8FA, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2DF2D804_1DB0_4CD8_41A4_686853CCD59E, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2A637DEB_2520_6D21_41BF_228320F9BE6B, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 6, 0); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF08F64_1DB0_C359_418C_1E71C1D3BD66, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF0FF64_1DB0_C359_41BA_B5EB2D51C8FA, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2DF2D804_1DB0_4CD8_41A4_686853CCD59E, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_2A1E2DE3_2520_6D21_41BF_7B452D5DEAD4",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A61BDF5_2520_6D21_41BE_DE1BAD32A30E",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4BMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_33366870_1DB1_CD39_41A7_6068DD277ED0",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4BMapPlayer"
  }
 ],
 "id": "playList_35CCBC9B_2521_93E1_4193_67368F036088",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_2A607DF6_2520_6D23_41B9_E0F9FD83F4A4",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A190DD1_2520_6D61_41BF_DE62D3391970",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A612DF4_2520_6D27_41B3_54FF5B901109",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A183DD4_2520_6D67_4196_230E05CD7E1E",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A630DEB_2520_6D21_41AD_30698E4B609E",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 29.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2A269D97_2520_6DE1_41AE_9338F5AB813E"
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_31C77742_1DB0_4358_4197_1BE36C6A8030",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0MapPlayer"
  }
 ],
 "id": "playList_35CD9C9B_2521_93E1_41B7_BA8FB0A72917",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_2DF17801_1DB0_4CDB_419D_C337AC9ABC67",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF24F5B_1DB0_C36F_41AB_865CFB333C47",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF19F5C_1DB0_C369_41B8_385AA0A756C1",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1E6DE2_2520_6D23_41B4_8FE463AD24E8",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -6.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2BC46D77_2520_6D21_41A4_CF31DD66CF6B"
},
{
 "duration": 1000,
 "id": "effect_2A619DF2_2520_6D23_41C0_25C4DB450B89",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 21.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3465ACDF_2521_9361_4194_2939B8FC26F9"
},
{
 "duration": 1000,
 "id": "effect_2DF28F5D_1DB0_C36B_41B4_7EFE66AF4D61",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A191DD1_2520_6D61_418B_106635EB0AAF",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -173.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2BEB5D41_2520_6D61_41B6_C8CC295A7B47"
},
{
 "duration": 1000,
 "id": "effect_2DF27F58_1DB0_C369_41A2_74F4505A1C17",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -80.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2BD2AD82_2520_6DE3_41BB_C8A2FC1568A0"
},
{
 "duration": 1000,
 "id": "effect_2A188DE0_2520_6D5F_41BA_979CABC7C2EF",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A184DCF_2520_6D61_41AF_E8EED4791F80",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -131.47,
   "yaw": -3.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_07749D79_1C90_C72A_41B3_31D0B8842A07"
  },
  {
   "panorama": "this.panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_05C77D50_1C90_4778_4196_E5682042F773",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -121.09,
   "yaw": -150.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B",
 "thumbnailUrl": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_t.jpg",
 "label": "T\u00fanel de acceso",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_02333301_1CF0_FCD8_41B6_8E82ACD77677",
  "this.overlay_3C508094_1C91_BDF9_417F_251661E3F414",
  "this.overlay_0D205CD1_1F58_A950_41B0_9D2A5B9AFD70",
  "this.overlay_0D2EAB1C_1FA8_A8D1_40E4_D438AF104500"
 ]
},
{
 "duration": 1000,
 "id": "effect_2A672DF7_2520_6D21_4190_7506C24E7B68",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF1EF5F_1DB0_C367_41A1_A1C6793FF976",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A18ADDF_2520_6D61_4151_897B43FA6405",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A62EDF0_2520_6D3F_41BB_5BEBB3047C47",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF20F5B_1DB0_C36F_4198_5D64A40839DA",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF1BF5C_1DB0_C369_4173_5AC51C59DBE0",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A638DEF_2520_6D21_419C_8232100B9D33",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_009CC655_1C90_457B_4192_D175F0C259A0",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -3.24,
   "yaw": -131.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B"
  },
  {
   "backwardYaw": 64.61,
   "yaw": 43.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960"
  },
  {
   "backwardYaw": 3.5,
   "yaw": 17.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_050B3C58_1C91_C569_41A5_A095E4019938"
  },
  {
   "panorama": "this.panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_07749D79_1C90_C72A_41B3_31D0B8842A07",
 "thumbnailUrl": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_t.jpg",
 "label": "\u00c1rea de comedor",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_07748D7A_1C90_C729_41BA_B65D086CE52A",
  "this.overlay_0774FD7A_1C90_C729_41B5_B45F1967B14C",
  "this.overlay_0774CD7A_1C90_C729_41A2_F5365483D547",
  "this.overlay_3FFA57F5_1C90_C33B_41BA_0543F4DD2DD9",
  "this.overlay_3F3B5515_1C90_44F8_41B9_C4785D5FCF89",
  "this.overlay_098DDC0A_1FA9_68B1_41BB_5AE893ADB148"
 ]
},
{
 "duration": 1000,
 "id": "effect_2DF2EF5D_1DB0_C36B_41BC_5247A7FEAF9B",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_3A3A9187_1D70_7FD8_4196_2B57A4E936FA",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54MapPlayer"
  }
 ],
 "id": "playList_35CC3C9B_2521_93E1_41C1_4C0D0C858A5E",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_2A602DF3_2520_6D21_4188_26745CF84F0A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_camera"
},
{
 "viewerArea": "this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B",
 "id": "ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4BMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "duration": 1000,
 "id": "effect_2A1EEDE3_2520_6D21_41A4_58E84E10CFE0",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A186DD8_2520_6D6F_41B6_6327A3D05169",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A654DF8_2520_6D2F_4190_EB7E486B7890",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF12F62_1DB0_C359_4179_8EED77B91636",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1FEDDD_2520_6D61_41A5_0902945BC33E",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "viewerArea": "this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0",
 "id": "ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0MapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_camera"
},
{
 "duration": 1000,
 "id": "effect_2A1F5DE1_2520_6D21_41B0_8B5ED24E7EDB",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_3A3A9187_1D70_7FD8_4196_2B57A4E936FA",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54MapPlayer"
  }
 ],
 "id": "playList_35CDCC9B_2521_93E1_4191_E4C54053551C",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_2DF25F58_1DB0_C369_41AA_971E0814B148",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1A8DCF_2520_6D61_41BD_84C905E8E4BE",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_05C77D50_1C90_4778_4196_E5682042F773_camera"
},
{
 "duration": 1000,
 "id": "effect_2A18FDD5_2520_6D61_41B5_4CEEBB8AE068",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A18BDE0_2520_6D5F_41AA_2E398D6BD75A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A603DF6_2520_6D23_41B2_1CC2F8F9C34D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -9.62,
   "yaw": -166.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_009CC655_1C90_457B_4192_D175F0C259A0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC",
 "thumbnailUrl": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_t.jpg",
 "label": "Piscina Pent Garden",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_34027FA1_20D9_67F0_41BA_9C4C70197B76"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -161.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2A0D9DC3_2520_6D61_41A4_EAE348D41436"
},
{
 "duration": 1000,
 "id": "effect_2DF08F64_1DB0_C359_418C_1E71C1D3BD66",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1C0DE9_2520_6D21_41AB_3AE6064B6A38",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 58.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3447ECF4_2521_9327_41BF_AEECA033794F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 96.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2BF2FD57_2520_6D61_417D_5A33D276AC0C"
},
{
 "duration": 1000,
 "id": "effect_2A1F7DE0_2520_6D5F_41B6_FD15D13B1C71",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_050B3C58_1C91_C569_41A5_A095E4019938_camera"
},
{
 "duration": 1000,
 "id": "effect_2DF2CF5A_1DB0_C369_41B9_1E3A4E3BC8F7",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF28F57_1DB0_C367_41B0_4AE19E1EE96D",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1F2DDC_2520_6D67_41B3_73DC4C1A5A0A",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -83.61,
   "yaw": 100.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_050B3C58_1C91_C569_41A5_A095E4019938"
  },
  {
   "backwardYaw": 43.5,
   "yaw": 64.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_07749D79_1C90_C72A_41B3_31D0B8842A07"
  },
  {
   "backwardYaw": -20.53,
   "yaw": 3.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960",
 "thumbnailUrl": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_t.jpg",
 "label": "Piscina infantil",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_012CE69B_1C9F_C5E8_41A6_8C8A4D1CC438",
  "this.overlay_012D069B_1C9F_C5E8_4172_AAC865856650",
  "this.overlay_0A2CED32_1FEF_A8D1_419C_2BD8EE914FE5"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_camera"
},
{
 "duration": 1000,
 "id": "effect_2A601DF3_2520_6D21_41BC_4C8B366DF191",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A198DCE_2520_6D63_41B7_96433B49FECB",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4BMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_33366870_1DB1_CD39_41A7_6068DD277ED0",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4BMapPlayer"
  }
 ],
 "id": "playList_35CC4C9B_2521_93E1_41AD_DD02FE292696",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_2A19CDD2_2520_6D63_41A3_481A74C88846",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1CFDEA_2520_6D23_41AC_BA1CAC614C73",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 127.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2BEEFD4C_2520_6D67_41A8_D1BDE990B2B3"
},
{
 "duration": 1000,
 "id": "effect_2A1EBDE7_2520_6D21_41BF_A21002C71888",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3401DCC0_2521_935F_41A5_4A63EF744D49"
},
{
 "duration": 1000,
 "id": "effect_2A19DDD2_2520_6D63_419B_192F7514C4F5",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1F5DDC_2520_6D67_41A0_1961026CB6A1",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1E7DE2_2520_6D23_419C_BF1C07614EF9",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1E9DE4_2520_6D27_41AB_7C014D694D14",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A18CDD5_2520_6D61_41C0_65EC1383B18F",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A198DD2_2520_6D63_4192_3B2F12A4E6BF",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A631DEE_2520_6D23_41B0_54FF8C5A24A3",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "mouseControlMode": "drag_acceleration"
},
{
 "duration": 1000,
 "id": "effect_2A180DDE_2520_6D63_41B3_443912995006",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A62BDF1_2520_6D21_41A8_D0FDF19D9B2A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A18CDDA_2520_6D63_4195_88A525CCA6BE",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1D7DE7_2520_6D21_4181_7F1AD2FC60B4",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 48.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_34753CEA_2521_9323_418E_779443FE9082"
},
{
 "duration": 1000,
 "id": "effect_2A1D2DE5_2520_6D21_41BC_53B050F6A934",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF23F57_1DB0_C367_41A3_446395E4270F",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A18DDDA_2520_6D63_41B9_32A1A4123F0A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1CADED_2520_6D21_41BD_5C9C652C4D6B",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A180DD9_2520_6D61_41B1_C0AACFD67993",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF29F5A_1DB0_C369_41B9_2537B855F9A7",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_32176601_1DB0_C4DB_4181_F744C2CFC523",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF2D804_1DB0_4CD8_41A4_686853CCD59E",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1F8DE2_2520_6D23_41B6_FBF2F97FB118",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_31C77742_1DB0_4358_4197_1BE36C6A8030",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0MapPlayer"
  }
 ],
 "id": "playList_35CCEC9B_2521_93E1_41AE_B10515960260",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_2A626DEC_2520_6D27_41A5_D651083B979D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Roof Pent House",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_t.jpg",
 "partial": false,
 "id": "panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89",
 "pitch": 0
},
{
 "duration": 1000,
 "id": "effect_2A63CDEB_2520_6D21_41BF_719D43EE970D",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "media": "this.panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A198DCE_2520_6D63_41B7_96433B49FECB, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF28F57_1DB0_C367_41B0_4AE19E1EE96D, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A186DCF_2520_6D61_41B2_3E8CC523FB2E, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF23F57_1DB0_C367_41A3_446395E4270F, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A184DCF_2520_6D61_41AF_E8EED4791F80, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF21F58_1DB0_C369_41B2_8A338EED6511, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF28F57_1DB0_C367_41B0_4AE19E1EE96D, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF23F57_1DB0_C367_41A3_446395E4270F, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF21F58_1DB0_C369_41B2_8A338EED6511, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1A8DCF_2520_6D61_41BD_84C905E8E4BE, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF27F58_1DB0_C369_41A2_74F4505A1C17, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A1A9DD0_2520_6D7F_418A_E63E115CBB1A, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF25F58_1DB0_C369_41AA_971E0814B148, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A196DD0_2520_6D7F_41B3_40723ADBE6BC, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1BF59_1DB0_C36B_41AC_DA6BD91149E7, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF27F58_1DB0_C369_41A2_74F4505A1C17, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF25F58_1DB0_C369_41AA_971E0814B148, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1BF59_1DB0_C36B_41AC_DA6BD91149E7, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_07749D79_1C90_C72A_41B3_31D0B8842A07",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A197DD0_2520_6D7F_41AB_5CD46A715620, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF31F59_1DB0_C36B_41B8_A79A8CEC82FE, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A195DD0_2520_6D7F_41B7_ADC4E6A0B5E8, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF37F59_1DB0_C36B_41A7_9E7280863702, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A192DD1_2520_6D61_41B7_585FF454F433, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF35F5A_1DB0_C369_41B7_C3CF1494CA01, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF31F59_1DB0_C36B_41B8_A79A8CEC82FE, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF37F59_1DB0_C36B_41A7_9E7280863702, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF35F5A_1DB0_C369_41B7_C3CF1494CA01, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_050B3C58_1C91_C569_41A5_A095E4019938",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A190DD1_2520_6D61_41BF_DE62D3391970, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF29F5A_1DB0_C369_41B9_2537B855F9A7, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A191DD1_2520_6D61_418B_106635EB0AAF, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF2CF5A_1DB0_C369_41B9_1E3A4E3BC8F7, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A19EDD2_2520_6D63_41AA_75161CB8686B, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF22F5A_1DB0_C369_4197_18D96A351A93, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF29F5A_1DB0_C369_41B9_2537B855F9A7, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF2CF5A_1DB0_C369_41B9_1E3A4E3BC8F7, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF22F5A_1DB0_C369_4197_18D96A351A93, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_050B3C58_1C91_C569_41A5_A095E4019938_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A19CDD2_2520_6D63_41A3_481A74C88846, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF20F5B_1DB0_C36F_4198_5D64A40839DA, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A19DDD2_2520_6D63_419B_192F7514C4F5, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF26F5B_1DB0_C36F_4189_5B226CA35880, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A198DD2_2520_6D63_4192_3B2F12A4E6BF, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF24F5B_1DB0_C36F_41AB_865CFB333C47, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF20F5B_1DB0_C36F_4198_5D64A40839DA, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF26F5B_1DB0_C36F_4189_5B226CA35880, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF24F5B_1DB0_C36F_41AB_865CFB333C47, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A187DD3_2520_6D61_418B_2B3D5F54B52F, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF1BF5C_1DB0_C369_4173_5AC51C59DBE0, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A184DD3_2520_6D61_41BB_667F2A148A50, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF19F5C_1DB0_C369_41B8_385AA0A756C1, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A185DD3_2520_6D61_41C0_06DAE79D7A22, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1DF5C_1DB0_C369_41BC_F9A21107F2BE, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF1BF5C_1DB0_C369_4173_5AC51C59DBE0, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF19F5C_1DB0_C369_41B8_385AA0A756C1, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1DF5C_1DB0_C369_41BC_F9A21107F2BE, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A182DD4_2520_6D67_41C1_E80B1049F6E6, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2AF5D_1DB0_C36B_41B7_23D4CC2BF8D1, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A183DD4_2520_6D67_4196_230E05CD7E1E, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF28F5D_1DB0_C36B_41B4_7EFE66AF4D61, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A180DD4_2520_6D67_41A1_0765138C251C, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF2EF5D_1DB0_C36B_41BC_5247A7FEAF9B, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2AF5D_1DB0_C36B_41B7_23D4CC2BF8D1, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF28F5D_1DB0_C36B_41B4_7EFE66AF4D61, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF2EF5D_1DB0_C36B_41BC_5247A7FEAF9B, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_05C77D50_1C90_4778_4196_E5682042F773",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A18FDD5_2520_6D61_41B5_4CEEBB8AE068, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2DF5E_1DB0_C369_41BC_F27F7E7EE1B3, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A18CDD5_2520_6D61_41C0_65EC1383B18F, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF20F5E_1DB0_C369_41B6_01F0AE6662E5, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A18DDD5_2520_6D61_41BE_8F090D97E2B0, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF26F5E_1DB0_C369_4194_44D0C308C4BA, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2DF5E_1DB0_C369_41BC_F27F7E7EE1B3, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF20F5E_1DB0_C369_41B6_01F0AE6662E5, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF26F5E_1DB0_C369_4194_44D0C308C4BA, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_05C77D50_1C90_4778_4196_E5682042F773_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A18ADD6_2520_6D63_41A1_D53887469443, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF25F5F_1DB0_C367_41B1_1FD6D5623837, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A18BDD6_2520_6D63_4132_01E729BE4320, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF18F5F_1DB0_C367_418C_C988B87DA232, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A193DD6_2520_6D63_41A7_4934DB9B77CA, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1EF5F_1DB0_C367_41A1_A1C6793FF976, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF25F5F_1DB0_C367_41B1_1FD6D5623837, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF18F5F_1DB0_C367_418C_C988B87DA232, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1EF5F_1DB0_C367_41A1_A1C6793FF976, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A191DD7_2520_6D61_41C2_4B36B14BFDC0, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF1DF5F_1DB0_C367_416E_D9F91C095E49, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A19CDD7_2520_6D61_419E_408CB9BCE411, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF13F60_1DB0_C359_419D_02056C6FF762, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A19DDD7_2520_6D61_41C1_D4ECBBD0A634, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF17F60_1DB0_C359_4193_78DBBB22377E, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF1DF5F_1DB0_C367_416E_D9F91C095E49, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF13F60_1DB0_C359_419D_02056C6FF762, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF17F60_1DB0_C359_4193_78DBBB22377E, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_009CC655_1C90_457B_4192_D175F0C259A0",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A19BDD7_2520_6D61_41BD_DFD3D795E6F2, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2CF60_1DB0_C359_41A6_71F07EF30DED, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF17801_1DB0_4CDB_419D_C337AC9ABC67, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2A198DD8_2520_6D6F_41C0_4C26CDA97005, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A186DD8_2520_6D6F_41B6_6327A3D05169, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF20F61_1DB0_C35B_419E_CA3D402BDCCA, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2CF60_1DB0_C359_41A6_71F07EF30DED, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF17801_1DB0_4CDB_419D_C337AC9ABC67, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF20F61_1DB0_C35B_419E_CA3D402BDCCA, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_009CC655_1C90_457B_4192_D175F0C259A0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_01A183FA_1C90_C329_4169_99094A722B2A",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A187DD8_2520_6D6F_41A1_886B4DD99F17, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF27F61_1DB0_C35B_41B1_85A485B5107A, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF12802_1DB0_4CD8_41BA_803CBEA65362, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2A184DD8_2520_6D6F_41B5_F25486F873FA, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A183DD9_2520_6D61_41AC_B1942E0BE10C, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1BF62_1DB0_C359_41AF_AC6608437BCD, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF27F61_1DB0_C35B_41B1_85A485B5107A, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF12802_1DB0_4CD8_41BA_803CBEA65362, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1BF62_1DB0_C359_41AF_AC6608437BCD, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A183FA_1C90_C329_4169_99094A722B2A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A180DD9_2520_6D61_41B1_C0AACFD67993, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF19F62_1DB0_C359_41A7_83FDBBAE5D1F, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF1D803_1DB0_4CD8_41A2_6F86F528D01C, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2A181DD9_2520_6D61_41BD_0A03202BA964, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A18EDDA_2520_6D63_41A2_A35FB9A7039A, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF12F62_1DB0_C359_4179_8EED77B91636, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF19F62_1DB0_C359_41A7_83FDBBAE5D1F, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF1D803_1DB0_4CD8_41A2_6F86F528D01C, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF12F62_1DB0_C359_4179_8EED77B91636, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06A504E0_1C90_4559_41A1_DED13A185BFF",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2DF1A803_1DB0_4CD8_41AB_D2D871A0762C, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2A18CDDA_2520_6D63_4195_88A525CCA6BE, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A18DDDA_2520_6D63_41B9_32A1A4123F0A, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF11F63_1DB0_C35F_41A3_A5760CE99A86, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A18ADDA_2520_6D63_41A3_1D5446342605, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF15F63_1DB0_C35F_41A7_049931292AB6, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2DF1A803_1DB0_4CD8_41AB_D2D871A0762C, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF11F63_1DB0_C35F_41A3_A5760CE99A86, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF15F63_1DB0_C35F_41A7_049931292AB6, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_32176601_1DB0_C4DB_4181_F744C2CFC523, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2A188DDB_2520_6D61_41BE_5E6E20BBC70D, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A189DDB_2520_6D61_41BB_F3A9D5A0CD8A, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_5B9CF303_1DEF_BCD8_4198_C6FBD5324859, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1F7DDB_2520_6D61_4185_45CFC885F923, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_5B9D6303_1DEF_BCD8_41A1_40CF7501689B, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 14, 15); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_32176601_1DB0_C4DB_4181_F744C2CFC523, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_5B9CF303_1DEF_BCD8_4198_C6FBD5324859, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_5B9D6303_1DEF_BCD8_41A1_40CF7501689B, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "camera": "this.panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_camera",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.mainPlayList, 15, 0); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF08F64_1DB0_C359_418C_1E71C1D3BD66, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF0FF64_1DB0_C359_41BA_B5EB2D51C8FA, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2DF2D804_1DB0_4CD8_41A4_686853CCD59E, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1F4DDC_2520_6D67_4196_365E88CFC44A, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF08F64_1DB0_C359_418C_1E71C1D3BD66, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A1F5DDC_2520_6D67_41A0_1961026CB6A1, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF0FF64_1DB0_C359_41BA_B5EB2D51C8FA, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2DF2D804_1DB0_4CD8_41A4_686853CCD59E, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2A1F2DDC_2520_6D67_41B3_73DC4C1A5A0A, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B'); this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_2A1C8DEA_2520_6D23_4199_F674C664CB3E",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A185DD3_2520_6D61_41C0_06DAE79D7A22",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1CFDEC_2520_6D27_4199_F5637BB23204",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A610DF1_2520_6D21_41B1_044036397B83",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -30.64,
   "yaw": -52.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_05C77D50_1C90_4778_4196_E5682042F773"
  },
  {
   "backwardYaw": -150.4,
   "yaw": -121.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4",
 "thumbnailUrl": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_t.jpg",
 "label": "Lobby",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_02A9E861_1CF0_CD5B_41BC_68B7AD2019B0",
  "this.overlay_3541B99E_21AB_ABD1_41BA_D7DA85D00F27"
 ]
},
{
 "duration": 1000,
 "id": "effect_2A61BDF2_2520_6D23_41C1_6B495D0FB309",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 149.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2BD86D8D_2520_6DE1_4197_B75A6E2B0CEA"
},
{
 "duration": 1000,
 "id": "effect_2DF20F61_1DB0_C35B_419E_CA3D402BDCCA",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2BFFED6C_2520_6D27_41B5_7B5EEFC3AACD"
},
{
 "duration": 1000,
 "id": "effect_2A666DF7_2520_6D21_41A2_276F868015BE",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF22F5A_1DB0_C369_4197_18D96A351A93",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_050B3C58_1C91_C569_41A5_A095E4019938",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 3.36,
   "yaw": -20.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B",
 "thumbnailUrl": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_t.jpg",
 "label": "\u00c1rea de Jacuzzis",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_05DD025C_1C90_DD69_41AD_CEF41B7566EA",
  "this.overlay_05DD725C_1C90_DD69_41AB_AD5A635EDF15"
 ]
},
{
 "duration": 1000,
 "id": "effect_2A1DEDE8_2520_6D2F_41A5_7067728053FF",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF26F5E_1DB0_C369_4194_44D0C308C4BA",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A181DD9_2520_6D61_41BD_0A03202BA964",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A183DD9_2520_6D61_41AC_B1942E0BE10C",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A18EDDA_2520_6D63_41A2_A35FB9A7039A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A18BDD6_2520_6D63_4132_01E729BE4320",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1F4DDC_2520_6D67_4196_365E88CFC44A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF2DF5E_1DB0_C369_41BC_F27F7E7EE1B3",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1D0DE7_2520_6D21_41A9_39B0829DAA22",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1FEDE1_2520_6D21_41A2_3AE4F3A531E1",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A63EDEE_2520_6D23_41B1_132B8036B243",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A61ADF2_2520_6D23_419E_55908D54674E",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_009CC655_1C90_457B_4192_D175F0C259A0_camera"
},
{
 "duration": 1000,
 "id": "effect_2A628DF1_2520_6D21_41BB_44FD22C70350",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF20F5E_1DB0_C369_41B6_01F0AE6662E5",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A633DEE_2520_6D23_41C2_135F910978BA",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF25F5F_1DB0_C367_41B1_1FD6D5623837",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_camera"
},
{
 "duration": 1000,
 "id": "effect_2DF1BF62_1DB0_C359_41AF_AC6608437BCD",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 99.4,
   "yaw": 6.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_050B3C58_1C91_C569_41A5_A095E4019938"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019",
 "thumbnailUrl": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_t.jpg",
 "label": "Sal\u00f3n de usos m\u00faltiples",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0D6907B6_1FD8_A7D0_41B0_83F9EF424C49"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 18.01,
   "yaw": -158.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_06A504E0_1C90_4559_41A1_DED13A185BFF",
 "thumbnailUrl": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_t.jpg",
 "label": "\u00c1rea Social Depto. A",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_35A44CFB_21A8_A957_41B0_B8721E4EA365"
 ]
},
{
 "duration": 1000,
 "id": "effect_2A1EFDE6_2520_6D23_4196_32FB78EC3D5B",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A63ADEF_2520_6D21_41B5_95D20E050C0F",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 7.03,
  "class": "PanoramaCameraPosition",
  "pitch": 21.61
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_camera"
},
{
 "duration": 1000,
 "id": "effect_2DF1D803_1DB0_4CD8_41A2_6F86F528D01C",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A19BDD7_2520_6D61_41BD_DFD3D795E6F2",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -136.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2BF4CD62_2520_6D23_4193_022D0D68492F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2A1A8DCE_2520_6D63_41AD_EB80BB8D83DF"
},
{
 "duration": 1000,
 "id": "effect_2DF17F60_1DB0_C359_4193_78DBBB22377E",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF19F62_1DB0_C359_41A7_83FDBBAE5D1F",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1C9DEA_2520_6D23_418D_5A0C480DB923",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_01A183FA_1C90_C329_4169_99094A722B2A_camera"
},
{
 "duration": 1000,
 "id": "effect_2A610DF4_2520_6D27_41BD_29F08A306447",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -79.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2A2C5DA2_2520_6D23_41BD_BD4CF0621C50"
},
{
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "Departamento A",
 "id": "map_3A3A9187_1D70_7FD8_4196_2B57A4E936FA",
 "minimumZoomFactor": 0.5,
 "thumbnailUrl": "media/map_3A3A9187_1D70_7FD8_4196_2B57A4E936FA_t.png",
 "width": 2500,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "levels": [
   {
    "url": "media/map_3A3A9187_1D70_7FD8_4196_2B57A4E936FA.png",
    "width": 2500,
    "class": "ImageResourceLevel",
    "height": 2500
   },
   {
    "url": "media/map_3A3A9187_1D70_7FD8_4196_2B57A4E936FA_lq.png",
    "width": 256,
    "class": "ImageResourceLevel",
    "height": 256,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "initialZoomFactor": 1,
 "class": "Map",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "height": 2500,
 "overlays": [
  "this.overlay_3B4E00F7_1D71_BD38_4193_EDB40E0EE5C9",
  "this.overlay_3A5FC0E0_1D73_DD59_41B6_F401BDD576FA"
 ]
},
{
 "duration": 1000,
 "id": "effect_2A187DD3_2520_6D61_418B_2B3D5F54B52F",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -158.13,
   "yaw": 18.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06A504E0_1C90_4559_41A1_DED13A185BFF"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7",
 "thumbnailUrl": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_t.jpg",
 "label": "Rec\u00e1mara Depto. A",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_34948F11_1C90_44FB_41B5_2D135A332AE3"
 ]
},
{
 "duration": 1000,
 "id": "effect_2DF37F59_1DB0_C36B_41A7_9E7280863702",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -162.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2A390DAD_2520_6D21_41C1_2A8C9E23B40C"
},
{
 "duration": 1000,
 "id": "effect_2A1A9DD0_2520_6D7F_418A_E63E115CBB1A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A19CDD7_2520_6D61_419E_408CB9BCE411",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_camera"
},
{
 "duration": 1000,
 "id": "effect_2A652DF9_2520_6D21_4183_1159B65AF5B5",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A19DDD7_2520_6D61_41C1_D4ECBBD0A634",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF35F5A_1DB0_C369_41B7_C3CF1494CA01",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_camera"
},
{
 "viewerArea": "this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54",
 "id": "ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54MapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "duration": 1000,
 "id": "effect_2A1CBDED_2520_6D21_41B6_280066927B48",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1E1DE3_2520_6D21_418A_C222A8DE7527",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A18ADDA_2520_6D63_41A3_1D5446342605",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A195DD0_2520_6D7F_41B7_ADC4E6A0B5E8",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -52.84,
   "yaw": -30.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_05C77D50_1C90_4778_4196_E5682042F773",
 "thumbnailUrl": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_t.jpg",
 "label": "Rooftop",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_05C76D50_1C90_4778_41A6_9C634C7A39F1",
  "this.overlay_05C70D50_1C90_4778_41AF_36D7042FEC32"
 ]
},
{
 "duration": 1000,
 "id": "effect_2A1E1DE6_2520_6D23_4197_CF852A27FAD0",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "Pent Garden",
 "id": "map_31C77742_1DB0_4358_4197_1BE36C6A8030",
 "minimumZoomFactor": 0.5,
 "thumbnailUrl": "media/map_31C77742_1DB0_4358_4197_1BE36C6A8030_t.png",
 "width": 2500,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "levels": [
   {
    "url": "media/map_31C77742_1DB0_4358_4197_1BE36C6A8030.png",
    "width": 2500,
    "class": "ImageResourceLevel",
    "height": 2500
   },
   {
    "url": "media/map_31C77742_1DB0_4358_4197_1BE36C6A8030_lq.png",
    "width": 256,
    "class": "ImageResourceLevel",
    "height": 256,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "initialZoomFactor": 1,
 "class": "Map",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "height": 2500,
 "overlays": [
  "this.overlay_30309625_1DB3_C4DB_4165_B859B0E75DE2",
  "this.overlay_326A4AB3_1DB3_CD38_4184_E86A20BC4F1D",
  "this.overlay_2DDDFE95_1DB0_45FB_41AF_B898590B73C1"
 ]
},
{
 "duration": 1000,
 "id": "effect_2A18DDD5_2520_6D61_41BE_8F090D97E2B0",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF12802_1DB0_4CD8_41BA_803CBEA65362",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1FDDE2_2520_6D23_41AA_CB96D454E6D8",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF27F61_1DB0_C35B_41B1_85A485B5107A",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A184DD8_2520_6D6F_41B5_F25486F873FA",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A182DDE_2520_6D63_41AE_808425FD56A3",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1F7DDB_2520_6D61_4185_45CFC885F923",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -173.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_2A008DB8_2520_6D2F_41B9_D926F9B8CA35"
},
{
 "duration": 1000,
 "id": "effect_2A187DD8_2520_6D6F_41A1_886B4DD99F17",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF1A803_1DB0_4CD8_41AB_D2D871A0762C",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 13.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3450BCFF_2521_9321_41C1_7A563A720E48"
},
{
 "duration": 1000,
 "id": "effect_2DF31F59_1DB0_C36B_41B8_A79A8CEC82FE",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_5B9D6303_1DEF_BCD8_41A1_40CF7501689B",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1E8DE4_2520_6D27_41BA_09A63B38ED08",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1F0DDD_2520_6D61_4183_55EE19193C99",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95",
 "thumbnailUrl": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_t.jpg",
 "label": "Mirador",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0CCA4441_1FD9_98B0_4174_E314B835C3DD"
 ]
},
{
 "duration": 1000,
 "id": "effect_2A193DD6_2520_6D63_41A7_4934DB9B77CA",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF21F58_1DB0_C369_41B2_8A338EED6511",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1FFDDD_2520_6D61_4197_ACA4C46D46DF",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A600DF3_2520_6D21_41C1_8E377631F56A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A192DD1_2520_6D61_41B7_585FF454F433",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1DDDE5_2520_6D21_41B5_8E5A40A09E74",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A191DD7_2520_6D61_41C2_4B36B14BFDC0",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF15F63_1DB0_C35F_41A7_049931292AB6",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF1DF5C_1DB0_C369_41BC_F9A21107F2BE",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A19EDD2_2520_6D63_41AA_75161CB8686B",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A18ADD6_2520_6D63_41A1_D53887469443",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A198DD8_2520_6D6F_41C0_4C26CDA97005",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A61EDF2_2520_6D23_41B5_B081812B8E63",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A189DDB_2520_6D61_41BB_F3A9D5A0CD8A",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1E9DE7_2520_6D21_41BB_AC42776F194B",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A18EDDF_2520_6D61_4192_9B0F6A4F07BE",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_5B9CF303_1DEF_BCD8_4198_C6FBD5324859",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -115.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_340E1CCA_2521_9363_41A2_7BC2E68083F9"
},
{
 "duration": 1000,
 "id": "effect_2A1F4DE0_2520_6D5F_41BF_A79F20FDDCAD",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A66EDF8_2520_6D2F_41AB_D3D63176265E",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -166.71,
   "yaw": -9.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC"
  },
  {
   "backwardYaw": 6.86,
   "yaw": 173.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_009CC655_1C90_457B_4192_D175F0C259A0",
 "thumbnailUrl": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_t.jpg",
 "label": "\u00c1rea Social Pent Garden",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3786EFB2_1C9F_C339_4198_1DAD07E13336",
  "this.overlay_3BD484B1_1C90_453B_41B4_65B3076EE8B4"
 ]
},
{
 "duration": 1000,
 "id": "effect_2A637DEB_2520_6D21_41BF_228320F9BE6B",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF11F63_1DB0_C35F_41A3_A5760CE99A86",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A639DEF_2520_6D21_41B8_5D074F29465E",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A18CDDF_2520_6D61_41A4_A5ABCA8FFDC3",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A182DD4_2520_6D67_41C1_E80B1049F6E6",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A615DF4_2520_6D27_4182_87EF30BC65E3",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1EEDE6_2520_6D23_4194_A580A81A41C8",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 173.07,
   "yaw": 6.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_009CC655_1C90_457B_4192_D175F0C259A0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E",
 "thumbnailUrl": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_t.jpg",
 "label": "Rec\u00e1mara Pent Garden",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3AAF76B8_1C90_4529_41AA_34ABCB7010AC"
 ]
},
{
 "duration": 1000,
 "id": "effect_2A632DEB_2520_6D21_41A4_D56438068485",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF13F60_1DB0_C359_419D_02056C6FF762",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1D1DE5_2520_6D21_41A4_75ED7DBF41B9",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A675DF7_2520_6D21_41A5_54DE92B3E252",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1FCDE1_2520_6D21_41AB_B40C30486D66",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "media": "this.panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A632DEB_2520_6D21_41A4_D56438068485, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF28F57_1DB0_C367_41B0_4AE19E1EE96D, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A630DEB_2520_6D21_41AD_30698E4B609E, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF23F57_1DB0_C367_41A3_446395E4270F, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A63CDEB_2520_6D21_41BF_719D43EE970D, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF21F58_1DB0_C369_41B2_8A338EED6511, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF28F57_1DB0_C367_41B0_4AE19E1EE96D, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF23F57_1DB0_C367_41A3_446395E4270F, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF21F58_1DB0_C369_41B2_8A338EED6511, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A639DEC_2520_6D27_4181_61F34DA38BA5, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF27F58_1DB0_C369_41A2_74F4505A1C17, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A626DEC_2520_6D27_41A5_D651083B979D, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF25F58_1DB0_C369_41AA_971E0814B148, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1CFDEC_2520_6D27_4199_F5637BB23204, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1BF59_1DB0_C36B_41AC_DA6BD91149E7, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF27F58_1DB0_C369_41A2_74F4505A1C17, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF25F58_1DB0_C369_41AA_971E0814B148, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1BF59_1DB0_C36B_41AC_DA6BD91149E7, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_07749D79_1C90_C72A_41B3_31D0B8842A07",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1CADED_2520_6D21_41BD_5C9C652C4D6B, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF31F59_1DB0_C36B_41B8_A79A8CEC82FE, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A1CBDED_2520_6D21_41B6_280066927B48, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF37F59_1DB0_C36B_41A7_9E7280863702, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1C9DED_2520_6D21_41B6_92608CD24025, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF35F5A_1DB0_C369_41B7_C3CF1494CA01, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF31F59_1DB0_C36B_41B8_A79A8CEC82FE, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF37F59_1DB0_C36B_41A7_9E7280863702, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF35F5A_1DB0_C369_41B7_C3CF1494CA01, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_050B3C58_1C91_C569_41A5_A095E4019938",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A633DEE_2520_6D23_41C2_135F910978BA, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF29F5A_1DB0_C369_41B9_2537B855F9A7, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A631DEE_2520_6D23_41B0_54FF8C5A24A3, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF2CF5A_1DB0_C369_41B9_1E3A4E3BC8F7, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A63EDEE_2520_6D23_41B1_132B8036B243, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF22F5A_1DB0_C369_4197_18D96A351A93, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF29F5A_1DB0_C369_41B9_2537B855F9A7, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF2CF5A_1DB0_C369_41B9_1E3A4E3BC8F7, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF22F5A_1DB0_C369_4197_18D96A351A93, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_050B3C58_1C91_C569_41A5_A095E4019938_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A63ADEF_2520_6D21_41B5_95D20E050C0F, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF20F5B_1DB0_C36F_4198_5D64A40839DA, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A638DEF_2520_6D21_419C_8232100B9D33, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF26F5B_1DB0_C36F_4189_5B226CA35880, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A639DEF_2520_6D21_41B8_5D074F29465E, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF24F5B_1DB0_C36F_41AB_865CFB333C47, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF20F5B_1DB0_C36F_4198_5D64A40839DA, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF26F5B_1DB0_C36F_4189_5B226CA35880, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF24F5B_1DB0_C36F_41AB_865CFB333C47, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A622DEF_2520_6D21_41B4_1FD0AC866347, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF1BF5C_1DB0_C369_4173_5AC51C59DBE0, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A621DF0_2520_6D3F_4199_80B9233DAE84, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF19F5C_1DB0_C369_41B8_385AA0A756C1, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A62EDF0_2520_6D3F_41BB_5BEBB3047C47, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1DF5C_1DB0_C369_41BC_F9A21107F2BE, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF1BF5C_1DB0_C369_4173_5AC51C59DBE0, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF19F5C_1DB0_C369_41B8_385AA0A756C1, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1DF5C_1DB0_C369_41BC_F9A21107F2BE, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A62DDF0_2520_6D3F_41B3_4144B40C6FB8, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2AF5D_1DB0_C36B_41B7_23D4CC2BF8D1, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A62BDF1_2520_6D21_41A8_D0FDF19D9B2A, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF28F5D_1DB0_C36B_41B4_7EFE66AF4D61, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A628DF1_2520_6D21_41BB_44FD22C70350, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF2EF5D_1DB0_C36B_41BC_5247A7FEAF9B, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2AF5D_1DB0_C36B_41B7_23D4CC2BF8D1, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF28F5D_1DB0_C36B_41B4_7EFE66AF4D61, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF2EF5D_1DB0_C36B_41BC_5247A7FEAF9B, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_05C77D50_1C90_4778_4196_E5682042F773",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A615DF1_2520_6D21_41BB_F6132C9CA10B, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2DF5E_1DB0_C369_41BC_F27F7E7EE1B3, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A610DF1_2520_6D21_41B1_044036397B83, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF20F5E_1DB0_C369_41B6_01F0AE6662E5, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A61EDF2_2520_6D23_41B5_B081812B8E63, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF26F5E_1DB0_C369_4194_44D0C308C4BA, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2DF5E_1DB0_C369_41BC_F27F7E7EE1B3, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF20F5E_1DB0_C369_41B6_01F0AE6662E5, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF26F5E_1DB0_C369_4194_44D0C308C4BA, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_05C77D50_1C90_4778_4196_E5682042F773_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A61ADF2_2520_6D23_419E_55908D54674E, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF25F5F_1DB0_C367_41B1_1FD6D5623837, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A61BDF2_2520_6D23_41C1_6B495D0FB309, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF18F5F_1DB0_C367_418C_C988B87DA232, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A619DF2_2520_6D23_41C0_25C4DB450B89, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1EF5F_1DB0_C367_41A1_A1C6793FF976, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF25F5F_1DB0_C367_41B1_1FD6D5623837, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF18F5F_1DB0_C367_418C_C988B87DA232, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1EF5F_1DB0_C367_41A1_A1C6793FF976, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A602DF3_2520_6D21_4188_26745CF84F0A, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF1DF5F_1DB0_C367_416E_D9F91C095E49, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A600DF3_2520_6D21_41C1_8E377631F56A, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF13F60_1DB0_C359_419D_02056C6FF762, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A601DF3_2520_6D21_41BC_4C8B366DF191, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF17F60_1DB0_C359_4193_78DBBB22377E, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF1DF5F_1DB0_C367_416E_D9F91C095E49, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF13F60_1DB0_C359_419D_02056C6FF762, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF17F60_1DB0_C359_4193_78DBBB22377E, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_009CC655_1C90_457B_4192_D175F0C259A0",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A615DF4_2520_6D27_4182_87EF30BC65E3, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2CF60_1DB0_C359_41A6_71F07EF30DED, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF17801_1DB0_4CDB_419D_C337AC9ABC67, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2A612DF4_2520_6D27_41B3_54FF5B901109, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A610DF4_2520_6D27_41BD_29F08A306447, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF20F61_1DB0_C35B_419E_CA3D402BDCCA, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2CF60_1DB0_C359_41A6_71F07EF30DED, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF17801_1DB0_4CDB_419D_C337AC9ABC67, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF20F61_1DB0_C35B_419E_CA3D402BDCCA, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_009CC655_1C90_457B_4192_D175F0C259A0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_01A183FA_1C90_C329_4169_99094A722B2A",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A61DDF5_2520_6D21_41BB_4A6A6CB2DDDA, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF27F61_1DB0_C35B_41B1_85A485B5107A, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF12802_1DB0_4CD8_41BA_803CBEA65362, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2A61ADF5_2520_6D21_4163_4DE00F23FCD4, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A61BDF5_2520_6D21_41BE_DE1BAD32A30E, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1BF62_1DB0_C359_41AF_AC6608437BCD, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF27F61_1DB0_C35B_41B1_85A485B5107A, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF12802_1DB0_4CD8_41BA_803CBEA65362, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1BF62_1DB0_C359_41AF_AC6608437BCD, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_01A183FA_1C90_C329_4169_99094A722B2A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A607DF6_2520_6D23_41B9_E0F9FD83F4A4, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF19F62_1DB0_C359_41A7_83FDBBAE5D1F, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF1D803_1DB0_4CD8_41A2_6F86F528D01C, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2A605DF6_2520_6D23_41A9_EF42806B4B2C, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A603DF6_2520_6D23_41B2_1CC2F8F9C34D, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF12F62_1DB0_C359_4179_8EED77B91636, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF19F62_1DB0_C359_41A7_83FDBBAE5D1F, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2DF1D803_1DB0_4CD8_41A2_6F86F528D01C, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF12F62_1DB0_C359_4179_8EED77B91636, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06A504E0_1C90_4559_41A1_DED13A185BFF",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2DF1A803_1DB0_4CD8_41AB_D2D871A0762C, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2A677DF7_2520_6D21_41C1_A8051D0B07C6, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A675DF7_2520_6D21_41A5_54DE92B3E252, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF11F63_1DB0_C35F_41A3_A5760CE99A86, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A672DF7_2520_6D21_4190_7506C24E7B68, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF15F63_1DB0_C35F_41A7_049931292AB6, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2DF1A803_1DB0_4CD8_41AB_D2D871A0762C, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF11F63_1DB0_C35F_41A3_A5760CE99A86, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF15F63_1DB0_C35F_41A7_049931292AB6, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_32176601_1DB0_C4DB_4181_F744C2CFC523, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2A666DF7_2520_6D21_41A2_276F868015BE, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A662DF8_2520_6D2F_41B7_A659977467E5, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_5B9CF303_1DEF_BCD8_4198_C6FBD5324859, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A66EDF8_2520_6D2F_41AB_D3D63176265E, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_5B9D6303_1DEF_BCD8_41A1_40CF7501689B, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_32176601_1DB0_C4DB_4181_F744C2CFC523, 'showEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_5B9CF303_1DEF_BCD8_4198_C6FBD5324859, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_5B9D6303_1DEF_BCD8_41A1_40CF7501689B, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A654DF8_2520_6D2F_4190_EB7E486B7890, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF08F64_1DB0_C359_418C_1E71C1D3BD66, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A652DF9_2520_6D21_4183_1159B65AF5B5, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF0FF64_1DB0_C359_41BA_B5EB2D51C8FA, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2DF2D804_1DB0_4CD8_41A4_686853CCD59E, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2A650DF9_2520_6D21_41B3_18BF180C51C9, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 0); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF08F64_1DB0_C359_418C_1E71C1D3BD66, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF0FF64_1DB0_C359_41BA_B5EB2D51C8FA, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2DF2D804_1DB0_4CD8_41A4_686853CCD59E, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0604C8FE_1C91_CD29_41A4_71411CA90A89_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_2A605DF6_2520_6D23_41A9_EF42806B4B2C",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A1D8DE8_2520_6D2F_41A4_A43BE35F29B0",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2DF1DF5F_1DB0_C367_416E_D9F91C095E49",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_341B9CD5_2521_9361_418A_1D18883F809A"
},
{
 "items": [
  {
   "media": "this.panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1F0DDD_2520_6D61_4183_55EE19193C99, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF28F57_1DB0_C367_41B0_4AE19E1EE96D, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A1FEDDD_2520_6D61_41A5_0902945BC33E, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF23F57_1DB0_C367_41A3_446395E4270F, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1FFDDD_2520_6D61_4197_ACA4C46D46DF, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF21F58_1DB0_C369_41B2_8A338EED6511, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9_playlist, 0, 1); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF28F57_1DB0_C367_41B0_4AE19E1EE96D, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF23F57_1DB0_C367_41A3_446395E4270F, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF21F58_1DB0_C369_41B2_8A338EED6511, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A184DDE_2520_6D63_41B7_9894C2EA695B, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF27F58_1DB0_C369_41A2_74F4505A1C17, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A185DDE_2520_6D63_4197_AEA7CC2B8D65, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF25F58_1DB0_C369_41AA_971E0814B148, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A182DDE_2520_6D63_41AE_808425FD56A3, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1BF59_1DB0_C36B_41AC_DA6BD91149E7, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9_playlist, 1, 2); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF27F58_1DB0_C369_41A2_74F4505A1C17, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF25F58_1DB0_C369_41AA_971E0814B148, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1BF59_1DB0_C36B_41AC_DA6BD91149E7, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_07749D79_1C90_C72A_41B3_31D0B8842A07",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A180DDE_2520_6D63_41B3_443912995006, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF31F59_1DB0_C36B_41B8_A79A8CEC82FE, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A18EDDF_2520_6D61_4192_9B0F6A4F07BE, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF37F59_1DB0_C36B_41A7_9E7280863702, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A18CDDF_2520_6D61_41A4_A5ABCA8FFDC3, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF35F5A_1DB0_C369_41B7_C3CF1494CA01, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9_playlist, 2, 3); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF31F59_1DB0_C36B_41B8_A79A8CEC82FE, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF37F59_1DB0_C36B_41A7_9E7280863702, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF35F5A_1DB0_C369_41B7_C3CF1494CA01, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_050B3C58_1C91_C569_41A5_A095E4019938",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A18ADDF_2520_6D61_4151_897B43FA6405, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF29F5A_1DB0_C369_41B9_2537B855F9A7, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A18BDE0_2520_6D5F_41AA_2E398D6BD75A, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF2CF5A_1DB0_C369_41B9_1E3A4E3BC8F7, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A188DE0_2520_6D5F_41BA_979CABC7C2EF, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF22F5A_1DB0_C369_4197_18D96A351A93, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9_playlist, 3, 4); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF29F5A_1DB0_C369_41B9_2537B855F9A7, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF2CF5A_1DB0_C369_41B9_1E3A4E3BC8F7, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF22F5A_1DB0_C369_4197_18D96A351A93, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_050B3C58_1C91_C569_41A5_A095E4019938_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1F7DE0_2520_6D5F_41B6_FD15D13B1C71, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF20F5B_1DB0_C36F_4198_5D64A40839DA, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A1F4DE0_2520_6D5F_41BF_A79F20FDDCAD, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF26F5B_1DB0_C36F_4189_5B226CA35880, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1F5DE1_2520_6D21_41B0_8B5ED24E7EDB, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF24F5B_1DB0_C36F_41AB_865CFB333C47, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9_playlist, 4, 5); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF20F5B_1DB0_C36F_4198_5D64A40839DA, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF26F5B_1DB0_C36F_4189_5B226CA35880, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF24F5B_1DB0_C36F_41AB_865CFB333C47, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1FEDE1_2520_6D21_41A2_3AE4F3A531E1, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF1BF5C_1DB0_C369_4173_5AC51C59DBE0, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A1FCDE1_2520_6D21_41AB_B40C30486D66, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF19F5C_1DB0_C369_41B8_385AA0A756C1, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1FDDE2_2520_6D23_41AA_CB96D454E6D8, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1DF5C_1DB0_C369_41BC_F9A21107F2BE, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9_playlist, 5, 6); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF1BF5C_1DB0_C369_4173_5AC51C59DBE0, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF19F5C_1DB0_C369_41B8_385AA0A756C1, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1DF5C_1DB0_C369_41BC_F9A21107F2BE, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1F8DE2_2520_6D23_41B6_FBF2F97FB118, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2AF5D_1DB0_C36B_41B7_23D4CC2BF8D1, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A1E6DE2_2520_6D23_41B4_8FE463AD24E8, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF28F5D_1DB0_C36B_41B4_7EFE66AF4D61, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1E7DE2_2520_6D23_419C_BF1C07614EF9, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF2EF5D_1DB0_C36B_41BC_5247A7FEAF9B, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9_playlist, 6, 7); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2AF5D_1DB0_C36B_41B7_23D4CC2BF8D1, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF28F5D_1DB0_C36B_41B4_7EFE66AF4D61, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF2EF5D_1DB0_C36B_41BC_5247A7FEAF9B, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_05C77D50_1C90_4778_4196_E5682042F773",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1E2DE3_2520_6D21_41BF_7B452D5DEAD4, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2DF5E_1DB0_C369_41BC_F27F7E7EE1B3, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A1E1DE3_2520_6D21_418A_C222A8DE7527, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF20F5E_1DB0_C369_41B6_01F0AE6662E5, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1EEDE3_2520_6D21_41A4_58E84E10CFE0, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF26F5E_1DB0_C369_4194_44D0C308C4BA, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9_playlist, 7, 8); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF2DF5E_1DB0_C369_41BC_F27F7E7EE1B3, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF20F5E_1DB0_C369_41B6_01F0AE6662E5, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF26F5E_1DB0_C369_4194_44D0C308C4BA, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_05C77D50_1C90_4778_4196_E5682042F773_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960",
   "end": "if(this.existsKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')){ if(this.getKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54')) { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true, -1, this.effect_2A1EADE4_2520_6D27_41B5_5C101AB4E236, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF25F5F_1DB0_C367_41B1_1FD6D5623837, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54'); if(this.existsKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')){ if(this.getKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0')) { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true, -1, this.effect_2A1E8DE4_2520_6D27_41BA_09A63B38ED08, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF18F5F_1DB0_C367_418C_C988B87DA232, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0'); if(this.existsKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')){ if(this.getKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')) { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true, -1, this.effect_2A1E9DE4_2520_6D27_41AB_7C014D694D14, 'showEffect', false); } else { this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1EF5F_1DB0_C367_41A1_A1C6793FF976, 'hideEffect', false); } }; this.unregisterKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B')",
   "start": "this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, true); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, true)",
   "begin": "this.registerKey('visibility_ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B', this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0', this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0.get('visible')); this.registerKey('visibility_ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54', this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54.get('visible')); this.setEndToItemIndex(this.DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9_playlist, 8, 0); this.keepComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false); this.setComponentVisibility(this.ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54, false, -1, this.effect_2DF25F5F_1DB0_C367_41B1_1FD6D5623837, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false); this.setComponentVisibility(this.ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0, false, -1, this.effect_2DF18F5F_1DB0_C367_418C_C988B87DA232, 'hideEffect', false); this.keepComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false); this.setComponentVisibility(this.ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B, false, -1, this.effect_2DF1EF5F_1DB0_C367_41A1_A1C6793FF976, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9_playlist",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_2A650DF9_2520_6D21_41B3_18BF180C51C9",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_2A621DF0_2520_6D3F_4199_80B9233DAE84",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "toolTipOpacity": 0.5,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "class": "ViewerArea",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipBackgroundColor": "#000000",
 "top": 0,
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 10,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 30,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": 271,
 "minHeight": 1,
 "horizontalAlign": "left",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "bottom": 20,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "height": 97,
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "data": {
  "name": "--STICKER"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
  "this.Image_12ECCE7C_1C91_C528_4194_DF7B2FE298AA"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#004B5A"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "top": "0%",
 "gap": 10,
 "height": 60,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "--BUTTON SET"
 },
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0.02
 ],
 "scrollBarWidth": 10,
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": 15,
 "width": 60,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 300,
 "verticalAlign": "middle",
 "minWidth": 1,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "top": 62,
 "gap": 0,
 "backgroundColor": [
  "#00B0AA"
 ],
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "overflow": "scroll",
 "data": {
  "name": "-button set"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "---INFO photo"
 },
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "---PANORAMA LIST"
 },
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "---LOCATION"
 },
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "---FLOORPLAN"
 },
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "---PHOTOALBUM"
 },
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "---REALTOR"
 },
 "overflow": "scroll"
},
{
 "maxHeight": 881,
 "propagateClick": false,
 "id": "Image_69D0269E_48A6_B27B_419F_63EB850992CF",
 "paddingRight": 0,
 "right": "0.06%",
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_69D0269E_48A6_B27B_419F_63EB850992CF.png",
 "width": 289,
 "minHeight": 1,
 "horizontalAlign": "right",
 "class": "Image",
 "bottom": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": 88,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "maxWidth": 1360,
 "data": {
  "name": "Image55578"
 }
},
{
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_45510ACA_53B1_AB6B_41D0_23C3252B8564",
 "left": "2.77%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 40,
 "minHeight": 0,
 "class": "IconButton",
 "top": "10.49%",
 "iconURL": "skin/IconButton_45510ACA_53B1_AB6B_41D0_23C3252B8564.png",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.historyGoBack(this.mainPlayList)",
 "horizontalAlign": "center",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_45510ACA_53B1_AB6B_41D0_23C3252B8564_rollover.png",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_45510ACA_53B1_AB6B_41D0_23C3252B8564_pressed.png",
 "cursor": "hand",
 "data": {
  "name": "Button37500"
 }
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_356C6700_1D70_C4D9_41AB_5AE7FBD82E54",
 "left": "2.23%",
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "18.275%",
 "minHeight": 1,
 "toolTipFontSize": 12,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "height": "28.639%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "bottom": "3.72%",
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "data": {
  "name": "ViewDB"
 }
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_33365202_1DB1_DCD9_4158_35B1B5C22BE0",
 "left": "2.35%",
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "18.215%",
 "minHeight": 1,
 "toolTipFontSize": 12,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "height": "28.525%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "bottom": "3.83%",
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "data": {
  "name": "View Pent"
 }
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_33CDAED1_1DB1_C578_41B4_FB1BB73BDB4B",
 "left": "2.29%",
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "18.275%",
 "minHeight": 1,
 "toolTipFontSize": 12,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "height": "28.853%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "bottom": "3.28%",
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "data": {
  "name": "View Roof"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_5DA87ADF_1D90_4D68_4191_AA9873966091",
 "left": "0%",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "0%",
 "children": [
  "this.Container_5DAA9ADF_1D90_4D68_419C_1C8BF732B515",
  "this.Container_5DABBADF_1D90_4D68_41B9_7788C8ECB719"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_5DA87ADF_1D90_4D68_4191_AA9873966091, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--CONTACT"
 },
 "overflow": "scroll"
},
{
 "textDecoration": "none",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#004B5A"
 ],
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "propagateClick": false,
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "paddingRight": 0,
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "width": 60,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "class": "Button",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "height": 60,
 "layout": "horizontal",
 "mode": "toggle",
 "minWidth": 1,
 "fontSize": 12,
 "pressedIconHeight": 30,
 "shadowBlurRadius": 6,
 "gap": 5,
 "backgroundColor": [
  "#00B0AA"
 ],
 "paddingTop": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColor": [
  "#004B5A"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconWidth": 30,
 "iconWidth": 30,
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "cursor": "hand",
 "rollOverBackgroundOpacity": 1,
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#00B0AA"
 ],
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "propagateClick": false,
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings Mute"
 },
 "paddingRight": 0,
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "width": 60,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "class": "Button",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "height": 60,
 "layout": "horizontal",
 "mode": "toggle",
 "minWidth": 1,
 "fontSize": 12,
 "pressedIconHeight": 30,
 "shadowBlurRadius": 6,
 "gap": 5,
 "backgroundColor": [
  "#00B0AA"
 ],
 "paddingTop": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColor": [
  "#004B5A"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconWidth": 30,
 "iconWidth": 30,
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "cursor": "hand",
 "rollOverBackgroundOpacity": 1,
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "fontWeight": "normal"
},
{
 "map": {
  "width": 84.27,
  "x": 744.38,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_33366870_1DB1_CD39_41A7_6068DD277ED0_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 755.62,
  "class": "HotspotMapOverlayMap",
  "height": 84.27,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Imagen"
 },
 "image": {
  "x": 744.38,
  "height": 84.27,
  "y": 755.62,
  "width": 84.27,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_33366870_1DB1_CD39_41A7_6068DD277ED0_HS_0.png",
     "width": 84,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ],
   "class": "ImageResource"
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_30F4896A_1DB0_4F29_41AC_44B3550D6C94"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.9,
   "image": "this.AnimatedImageResource_391399DA_21E8_EB51_41A5_50A7A76F3916",
   "pitch": -7.43,
   "yaw": 79.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_39A253FA_1C90_C328_41B3_0E4D7F5BAF17",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.9,
   "yaw": 79.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.76,
   "image": "this.AnimatedImageResource_36598678_1CB1_C529_41B5_7A810532320C",
   "pitch": 0.07,
   "yaw": -83.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_050B1C58_1C91_C569_4172_87A004C5CA1D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960, this.camera_2A2C5DA2_2520_6D23_41BD_BD4CF0621C50); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.76,
   "yaw": -83.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.76,
   "image": "this.AnimatedImageResource_36586678_1CB1_C529_4196_B82B103909B8",
   "pitch": -0.3,
   "yaw": 99.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_050B7C58_1C91_C569_4199_F3F1394813A8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019, this.camera_2A008DB8_2520_6D2F_41B9_D926F9B8CA35); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.76,
   "yaw": 99.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.94,
   "image": "this.AnimatedImageResource_36589678_1CB1_C529_41AD_A4C3C5F4C93E",
   "pitch": 0.35,
   "yaw": 23.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3A41EF4B_1C91_C36F_41B3_BA3456E08033",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.94,
   "yaw": 23.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_1_HS_22_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.94,
   "image": "this.AnimatedImageResource_39E9C904_21A8_A8B1_41B8_14581BB80352",
   "pitch": 0.5,
   "yaw": 3.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D380365_1FDB_9F70_4185_4169B500A5B3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07749D79_1C90_C72A_41B3_31D0B8842A07, this.camera_2A390DAD_2520_6D21_41C1_2A8C9E23B40C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.94,
   "yaw": 3.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0_HS_23_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.19,
   "image": "this.AnimatedImageResource_365C5677_1CB1_C527_41BC_5EFB56B8BCB8",
   "pitch": -4.57,
   "yaw": 170.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_02333301_1CF0_FCD8_41B6_8E82ACD77677",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.19,
   "yaw": 170.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.36,
   "image": "this.AnimatedImageResource_390C3592_21A8_9BD1_41C0_4708E73B72F7",
   "pitch": -5.57,
   "yaw": -3.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C508094_1C91_BDF9_417F_251661E3F414",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07749D79_1C90_C72A_41B3_31D0B8842A07, this.camera_34753CEA_2521_9323_418E_779443FE9082); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.36,
   "yaw": -3.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.09,
   "image": "this.AnimatedImageResource_39E4D902_21A8_A8B1_41AD_CFACA6A9D276",
   "pitch": -9.63,
   "yaw": -92.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D205CD1_1F58_A950_41B0_9D2A5B9AFD70",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.09,
   "yaw": -92.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.27,
   "image": "this.AnimatedImageResource_39E4B903_21A8_A8B7_4197_23DE9C054BFA",
   "pitch": -26.21,
   "yaw": -150.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D2EAB1C_1FA8_A8D1_40E4_D438AF104500",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4, this.camera_3447ECF4_2521_9327_41BF_AEECA033794F); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.27,
   "yaw": -150.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0_HS_9_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.43,
   "image": "this.AnimatedImageResource_3A63054A_1D70_C769_41A1_71961271D56D",
   "pitch": -6.23,
   "yaw": -83.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_07748D7A_1C90_C729_41BA_B65D086CE52A",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.43,
   "yaw": -83.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.45,
   "image": "this.AnimatedImageResource_3A63554A_1D70_C769_4166_DE0CB3A0313E",
   "pitch": -1.37,
   "yaw": 85.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0774FD7A_1C90_C729_41B5_B45F1967B14C",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.45,
   "yaw": 85.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.44,
   "image": "this.AnimatedImageResource_3A60B54A_1D70_C769_41BA_AC9BC80BD0D4",
   "pitch": -2.04,
   "yaw": 17.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0774CD7A_1C90_C729_41A2_F5365483D547",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_050B3C58_1C91_C569_41A5_A095E4019938, this.camera_341B9CD5_2521_9361_418A_1D18883F809A); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.44,
   "yaw": 17.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.54,
   "image": "this.AnimatedImageResource_3A60954A_1D70_C769_4181_E6B10CCEC601",
   "pitch": -1.1,
   "yaw": 43.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FFA57F5_1C90_C33B_41BA_0543F4DD2DD9",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960, this.camera_340E1CCA_2521_9363_41A2_7BC2E68083F9); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.54,
   "yaw": 43.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.53,
   "image": "this.AnimatedImageResource_3A60F54A_1D70_C769_41B2_A5EB8D41E41A",
   "pitch": -2.39,
   "yaw": -1.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F3B5515_1C90_44F8_41B9_C4785D5FCF89",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.53,
   "yaw": -1.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.45,
   "image": "this.AnimatedImageResource_39EA2903_21A8_A8B7_4159_F863E0574214",
   "pitch": -4.6,
   "yaw": -131.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_098DDC0A_1FA9_68B1_41BB_5AE893ADB148",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B, this.camera_3401DCC0_2521_935F_41A5_4A63EF744D49); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.45,
   "yaw": -131.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.61,
   "image": "this.AnimatedImageResource_39EE7905_21A8_A8B3_41B3_58EC31065E86",
   "pitch": -14.73,
   "yaw": -166.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_34027FA1_20D9_67F0_41BA_9C4C70197B76",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_009CC655_1C90_457B_4192_D175F0C259A0, this.camera_343AACB5_2521_9321_41A9_D506BEAF8C75); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.61,
   "yaw": -166.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.54,
   "image": "this.AnimatedImageResource_3A61B54C_1D70_C769_41B7_12D332C75DB3",
   "pitch": -1.4,
   "yaw": 3.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_012CE69B_1C9F_C5E8_41A6_8C8A4D1CC438",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B, this.camera_2BFFED6C_2520_6D27_41B5_7B5EEFC3AACD); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.54,
   "yaw": 3.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "hfov": 9.53,
   "image": "this.AnimatedImageResource_3655B67A_1CB1_C529_41BB_12FB59A21E53",
   "pitch": -2.09,
   "yaw": 100.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_012D069B_1C9F_C5E8_4172_AAC865856650",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_050B3C58_1C91_C569_41A5_A095E4019938, this.camera_2BF2FD57_2520_6D61_417D_5A33D276AC0C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.53,
   "yaw": 100.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "hfov": 9.53,
   "image": "this.AnimatedImageResource_39EF8905_21A8_A8B3_41B3_D5F4ADEAAC1D",
   "pitch": 2.33,
   "yaw": 64.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0A2CED32_1FEF_A8D1_419C_2BD8EE914FE5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07749D79_1C90_C72A_41B3_31D0B8842A07, this.camera_2BF4CD62_2520_6D23_4193_022D0D68492F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.53,
   "yaw": 64.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.33
  }
 ]
},
{
 "textDecoration": "none",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#00B0AA"
 ],
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "propagateClick": false,
 "paddingLeft": 0,
 "data": {
  "name": "Button settings VR"
 },
 "paddingRight": 0,
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "width": 60,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "class": "Button",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "height": 60,
 "layout": "horizontal",
 "mode": "push",
 "minWidth": 1,
 "fontSize": 12,
 "shadowBlurRadius": 6,
 "gap": 5,
 "backgroundColor": [
  "#00B0AA"
 ],
 "paddingTop": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColor": [
  "#004B5A"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "iconWidth": 30,
 "cursor": "hand",
 "rollOverBackgroundOpacity": 1,
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "pressedRollOverBackgroundColorRatios": [
  0.01
 ],
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#004B5A"
 ],
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "rollOverIconWidth": 30,
 "propagateClick": false,
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings HS"
 },
 "paddingRight": 0,
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "width": 60,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "rollOverIconHeight": 30,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "class": "Button",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "height": 60,
 "layout": "horizontal",
 "mode": "toggle",
 "minWidth": 1,
 "fontSize": 12,
 "pressedIconHeight": 30,
 "shadowBlurRadius": 6,
 "gap": 5,
 "backgroundColor": [
  "#00B0AA"
 ],
 "paddingTop": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColor": [
  "#004B5A"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconWidth": 30,
 "iconWidth": 30,
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "cursor": "hand",
 "rollOverBackgroundOpacity": 1,
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#00B0AA"
 ],
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "rollOverIconWidth": 30,
 "propagateClick": false,
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings Gyro"
 },
 "paddingRight": 0,
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "width": 60,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "rollOverIconHeight": 30,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "class": "Button",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "height": 60,
 "layout": "horizontal",
 "mode": "toggle",
 "minWidth": 1,
 "fontSize": 12,
 "pressedIconHeight": 30,
 "shadowBlurRadius": 6,
 "gap": 5,
 "backgroundColor": [
  "#00B0AA"
 ],
 "paddingTop": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColor": [
  "#004B5A"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconWidth": 30,
 "iconWidth": 30,
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "cursor": "hand",
 "rollOverBackgroundOpacity": 1,
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "fontWeight": "normal"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.8,
   "image": "this.AnimatedImageResource_390AA9D6_21E8_EB5E_41B2_251E56A4C647",
   "pitch": 0.56,
   "yaw": -52.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_02A9E861_1CF0_CD5B_41BC_68B7AD2019B0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_05C77D50_1C90_4778_4196_E5682042F773, this.camera_2BD86D8D_2520_6DE1_4197_B75A6E2B0CEA); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.8,
   "yaw": -52.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.41,
   "image": "this.AnimatedImageResource_390DA592_21A8_9BD1_41BF_B65FC1368B32",
   "pitch": -31.09,
   "yaw": -121.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3541B99E_21AB_ABD1_41BA_D7DA85D00F27",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B, this.camera_2A269D97_2520_6DE1_41AE_9338F5AB813E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 15.41,
   "yaw": -121.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0_HS_9_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.15,
   "image": "this.AnimatedImageResource_36578679_1CB1_C52B_41B9_47A587B242BF",
   "pitch": -7.13,
   "yaw": 139.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_05DD025C_1C90_DD69_41AD_CEF41B7566EA",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.15,
   "yaw": 139.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.25,
   "image": "this.AnimatedImageResource_36563679_1CB1_C52B_41AA_3BCCA132EC0B",
   "pitch": -1.1,
   "yaw": -20.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_05DD725C_1C90_DD69_41AB_AD5A635EDF15",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960, this.camera_2A1A8DCE_2520_6D63_41AD_EB80BB8D83DF); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.25,
   "yaw": -20.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9,
   "image": "this.AnimatedImageResource_390E99D8_21E8_EB51_41B6_F29318738232",
   "pitch": 1.09,
   "yaw": 6.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D6907B6_1FD8_A7D0_41B0_83F9EF424C49",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_050B3C58_1C91_C569_41A5_A095E4019938, this.camera_2BD2AD82_2520_6DE3_41BB_C8A2FC1568A0); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9,
   "yaw": 6.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.16,
   "image": "this.AnimatedImageResource_39EDC906_21A8_A8B1_41BD_E7A94970E3AC",
   "pitch": -5.96,
   "yaw": -158.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_35A44CFB_21A8_A957_41B0_B8721E4EA365",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7, this.camera_2A0D9DC3_2520_6D61_41A4_EAE348D41436); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.16,
   "yaw": -158.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.96
  }
 ]
},
{
 "map": {
  "width": 84.27,
  "x": 747.11,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_3A3A9187_1D70_7FD8_4196_2B57A4E936FA_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 887.48,
  "class": "HotspotMapOverlayMap",
  "height": 84.27,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Imagen"
 },
 "image": {
  "x": 747.05,
  "height": 84.27,
  "y": 887.36,
  "width": 84.27,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_3A3A9187_1D70_7FD8_4196_2B57A4E936FA_HS_0.png",
     "width": 84,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ],
   "class": "ImageResource"
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_3B4E00F7_1D71_BD38_4193_EDB40E0EE5C9"
},
{
 "map": {
  "width": 84.27,
  "x": 626.27,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_3A3A9187_1D70_7FD8_4196_2B57A4E936FA_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1634.77,
  "class": "HotspotMapOverlayMap",
  "height": 84.27,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Imagen"
 },
 "image": {
  "x": 626.26,
  "height": 84.27,
  "y": 1634.69,
  "width": 84.27,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_3A3A9187_1D70_7FD8_4196_2B57A4E936FA_HS_1.png",
     "width": 84,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ],
   "class": "ImageResource"
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_3A5FC0E0_1D73_DD59_41B6_F401BDD576FA"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.88,
   "image": "this.AnimatedImageResource_3A61554E_1D70_C769_418B_69890DB82EFB",
   "pitch": -6.02,
   "yaw": 18.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_34948F11_1C90_44FB_41B5_2D135A332AE3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06A504E0_1C90_4559_41A1_DED13A185BFF, this.camera_3465ACDF_2521_9361_4194_2939B8FC26F9); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.88,
   "yaw": 18.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.11,
   "image": "this.AnimatedImageResource_36564679_1CB1_C52B_41B6_2B2A9B86DB30",
   "pitch": -8.85,
   "yaw": -30.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_05C76D50_1C90_4778_41A6_9C634C7A39F1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4, this.camera_2BEEFD4C_2520_6D67_41A8_D1BDE990B2B3); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.11,
   "yaw": -30.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "hfov": 9.09,
   "image": "this.AnimatedImageResource_3656E679_1CB1_C52B_41AD_3A8590F0BB09",
   "pitch": -9.53,
   "yaw": 21.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_05C70D50_1C90_4778_41AF_36D7042FEC32",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.09,
   "yaw": 21.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.53
  }
 ]
},
{
 "map": {
  "width": 84.27,
  "x": 1171.35,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_31C77742_1DB0_4358_4197_1BE36C6A8030_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 887.64,
  "class": "HotspotMapOverlayMap",
  "height": 84.27,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Imagen"
 },
 "image": {
  "x": 1171.35,
  "height": 84.27,
  "y": 887.64,
  "width": 84.27,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_31C77742_1DB0_4358_4197_1BE36C6A8030_HS_0.png",
     "width": 84,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ],
   "class": "ImageResource"
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_30309625_1DB3_C4DB_4165_B859B0E75DE2"
},
{
 "map": {
  "width": 84.27,
  "x": 1314.61,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_31C77742_1DB0_4358_4197_1BE36C6A8030_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1758.43,
  "class": "HotspotMapOverlayMap",
  "height": 84.27,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Imagen"
 },
 "image": {
  "x": 1314.61,
  "height": 84.27,
  "y": 1758.43,
  "width": 84.27,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_31C77742_1DB0_4358_4197_1BE36C6A8030_HS_1.png",
     "width": 84,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ],
   "class": "ImageResource"
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_326A4AB3_1DB3_CD38_4184_E86A20BC4F1D"
},
{
 "map": {
  "width": 84.27,
  "x": 1058.99,
  "offsetY": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_31C77742_1DB0_4358_4197_1BE36C6A8030_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1325.84,
  "class": "HotspotMapOverlayMap",
  "height": 84.27,
  "offsetX": 0
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Imagen"
 },
 "image": {
  "x": 1058.99,
  "height": 84.27,
  "y": 1325.84,
  "width": 84.27,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_31C77742_1DB0_4358_4197_1BE36C6A8030_HS_2.png",
     "width": 84,
     "class": "ImageResourceLevel",
     "height": 84
    }
   ],
   "class": "ImageResource"
  }
 },
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_2DDDFE95_1DB0_45FB_41AF_B898590B73C1"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.28,
   "image": "this.AnimatedImageResource_39E87904_21A8_A8B1_41B9_EF5064EA9CCE",
   "pitch": -20.01,
   "yaw": 8.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0CCA4441_1FD9_98B0_4174_E314B835C3DD",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.28,
   "yaw": 8.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.02,
   "image": "this.AnimatedImageResource_3A61854C_1D70_C769_41A4_BC58A0B8E5DA",
   "pitch": -9.34,
   "yaw": 173.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3786EFB2_1C9F_C339_4198_1DAD07E13336",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E, this.camera_2BEB5D41_2520_6D61_41B6_C8CC295A7B47); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.02,
   "yaw": 173.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.58,
   "image": "this.AnimatedImageResource_3A61D54D_1D70_C76B_41B9_296B1540DE21",
   "pitch": -35.7,
   "yaw": -9.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3BD484B1_1C90_453B_41B4_65B3076EE8B4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC, this.camera_3450BCFF_2521_9321_41C1_7A563A720E48); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.58,
   "yaw": -9.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Generic 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.13,
   "image": "this.AnimatedImageResource_3A61154D_1D70_C76B_41B8_0AF935E965EF",
   "pitch": -7.65,
   "yaw": 6.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3AAF76B8_1C90_4529_41AA_34ABCB7010AC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_009CC655_1C90_457B_4192_D175F0C259A0, this.camera_2BC46D77_2520_6D21_41A4_CF31DD66CF6B); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.13,
   "yaw": 6.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.65
  }
 ]
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "scrollBarColor": "#000000",
 "paddingRight": 15,
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.Button_053675A8_1CB0_4729_41A2_DDF9EB3066BF",
  "this.DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9",
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": 697,
 "minHeight": 1,
 "horizontalAlign": "right",
 "class": "Container",
 "scrollBarOpacity": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": 60,
 "top": "0%",
 "gap": 3,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "-button set container"
 }
},
{
 "maxHeight": 1095,
 "propagateClick": false,
 "id": "Image_12ECCE7C_1C91_C528_4194_DF7B2FE298AA",
 "left": "3.92%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_12ECCE7C_1C91_C528_4194_DF7B2FE298AA.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "Image",
 "width": "6%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "data": {
  "name": "Image2760"
 },
 "maxWidth": 1095
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 0,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "right": "15%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "minHeight": 1,
 "class": "Container",
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "bottom": "80%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "bottom": "10%",
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "visible": false,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "right": "15%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "minHeight": 1,
 "class": "Container",
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "bottom": "80%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 0,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "right": "15%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "minHeight": 1,
 "class": "Container",
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "bottom": "80%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_5DAA9ADF_1D90_4D68_419C_1C8BF732B515",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "right": "10%",
 "children": [
  "this.Container_5DAB6ADF_1D90_4D68_4185_3DE3578F747A",
  "this.Container_5DAB5ADF_1D90_4D68_419F_487A0744F4A5"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "top": "5%",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_5DABBADF_1D90_4D68_41B9_7788C8ECB719",
 "left": "10%",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "right": "10%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_5DA86ADF_1D90_4D68_41A7_DB22CDD35E88"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "minHeight": 1,
 "class": "Container",
 "top": "5%",
 "scrollBarOpacity": 0.5,
 "layout": "vertical",
 "bottom": "80%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible"
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_01A183FA_1C90_C329_4169_99094A722B2A_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_391399DA_21E8_EB51_41A5_50A7A76F3916",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_36598678_1CB1_C529_41B5_7A810532320C",
 "frameCount": 20,
 "frameDuration": 41
},
{
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_36586678_1CB1_C529_4196_B82B103909B8",
 "frameCount": 20,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_1_HS_22_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_36589678_1CB1_C529_41AD_A4C3C5F4C93E",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_050B3C58_1C91_C569_41A5_A095E4019938_0_HS_23_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_39E9C904_21A8_A8B1_41B8_14581BB80352",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_365C5677_1CB1_C527_41BC_5EFB56B8BCB8",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_390C3592_21A8_9BD1_41C0_4708E73B72F7",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_39E4D902_21A8_A8B1_41AD_CFACA6A9D276",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_067DD3A2_1C90_C3D9_418C_ED08A300B64B_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_39E4B903_21A8_A8B7_4197_23DE9C054BFA",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3A63054A_1D70_C769_41A1_71961271D56D",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3A63554A_1D70_C769_4166_DE0CB3A0313E",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3A60B54A_1D70_C769_41BA_AC9BC80BD0D4",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3A60954A_1D70_C769_4181_E6B10CCEC601",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0_HS_9_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3A60F54A_1D70_C769_41B2_A5EB8D41E41A",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_07749D79_1C90_C72A_41B3_31D0B8842A07_0_HS_11_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_39EA2903_21A8_A8B7_4159_F863E0574214",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0601B3E0_1C9F_C359_41AD_4C3CE50AECBC_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_39EE7905_21A8_A8B3_41B3_58EC31065E86",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3A61B54C_1D70_C769_41B7_12D332C75DB3",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3655B67A_1CB1_C529_41BB_12FB59A21E53",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_012CC69B_1C9F_C5E8_41BB_77D87B2F6960_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_39EF8905_21A8_A8B3_41B3_D5F4ADEAAC1D",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_390AA9D6_21E8_EB5E_41B2_251E56A4C647",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_07F3F0CD_1C90_7D6B_412E_8EE144B50DC4_0_HS_9_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_390DA592_21A8_9BD1_41BF_B65FC1368B32",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_36578679_1CB1_C52B_41B9_47A587B242BF",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_05DD225C_1C90_DD69_41AF_25942CE49E4B_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_36563679_1CB1_C52B_41AA_3BCCA132EC0B",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0704DF9E_1C90_43E9_41AD_42A376E3E019_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_390E99D8_21E8_EB51_41B6_F29318738232",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_06A504E0_1C90_4559_41A1_DED13A185BFF_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_39EDC906_21A8_A8B1_41BD_E7A94970E3AC",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_06F8922E_1C90_5D28_41A6_8EEB943329D7_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3A61554E_1D70_C769_418B_69890DB82EFB",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_36564679_1CB1_C52B_41B6_2B2A9B86DB30",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_05C77D50_1C90_4778_4196_E5682042F773_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3656E679_1CB1_C52B_41AD_3A8590F0BB09",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_06C467DA_1C90_C368_41A9_CF894BC1BE95_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_39E87904_21A8_A8B1_41B9_EF5064EA9CCE",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3A61854C_1D70_C769_41A4_BC58A0B8E5DA",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_009CC655_1C90_457B_4192_D175F0C259A0_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3A61D54D_1D70_C76B_41B9_296B1540DE21",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_06BBE8C9_1C90_CD68_41BB_EA36BF69562E_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3A61154D_1D70_C76B_41B8_0AF935E965EF",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_053675A8_1CB0_4729_41A2_DDF9EB3066BF",
 "pressedBackgroundColor": [
  "#00B0AA"
 ],
 "backgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button house info"
 },
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "paddingLeft": 1,
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": 160,
 "iconHeight": 0,
 "minHeight": 1,
 "class": "Button",
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "fontSize": "16px",
 "label": "CONTACTOS",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "height": "100%",
 "paddingTop": 3,
 "click": "this.setComponentVisibility(this.Container_5DA87ADF_1D90_4D68_4191_AA9873966091, true, 0, null, null, false)",
 "fontStyle": "normal",
 "backgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#00B0AA"
 ],
 "shadow": false,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "iconWidth": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "arrowColor": "#FFFFFF",
 "id": "DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9",
 "popUpBackgroundColor": "#00B0AA",
 "pressedBackgroundColor": [
  "#00B0AA"
 ],
 "propagateClick": false,
 "paddingLeft": 15,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#004B5A",
 "paddingRight": 15,
 "selectedPopUpBackgroundColor": "#004B5A",
 "fontColor": "#FFFFFF",
 "width": 182,
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "data": {
  "name": "DropDown 1"
 },
 "popUpShadow": false,
 "minHeight": 1,
 "popUpGap": 2,
 "backgroundColorDirection": "vertical",
 "popUpPaddingBottom": 10,
 "playList": "this.DropDown_0E21BE9F_1C90_45E8_41B4_20E623AD5BE9_playlist",
 "class": "DropDown",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpPaddingTop": 10,
 "pressedRollOverBackgroundColor": [
  "#00B0AA"
 ],
 "fontSize": "16px",
 "label": "AMENIDADES",
 "backgroundColor": [
  "#004B5A"
 ],
 "gap": 0,
 "height": "100%",
 "paddingTop": 0,
 "popUpShadowBlurRadius": 6,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "backgroundOpacity": 1,
 "rollOverBackgroundColor": [
  "#00B0AA"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "popUpShadowColor": "#000000",
 "fontWeight": "bold",
 "arrowBeforeLabel": false,
 "popUpFontColor": "#FFFFFF",
 "popUpShadowSpread": 1
},
{
 "textDecoration": "none",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "arrowColor": "#FFFFFF",
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpBackgroundColor": "#00B0AA",
 "pressedBackgroundColor": [
  "#00B0AA"
 ],
 "propagateClick": false,
 "paddingLeft": 15,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#004B5A",
 "paddingRight": 15,
 "selectedPopUpBackgroundColor": "#004B5A",
 "fontColor": "#FFFFFF",
 "width": 212,
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "data": {
  "name": "DropDown 2"
 },
 "popUpShadow": false,
 "minHeight": 1,
 "popUpGap": 2,
 "backgroundColorDirection": "vertical",
 "popUpPaddingBottom": 10,
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "class": "DropDown",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpPaddingTop": 10,
 "pressedRollOverBackgroundColor": [
  "#00B0AA"
 ],
 "fontSize": "16px",
 "label": "DEPARTAMENTOS",
 "backgroundColor": [
  "#004B5A"
 ],
 "gap": 0,
 "height": "100%",
 "paddingTop": 0,
 "popUpShadowBlurRadius": 6,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "backgroundOpacity": 1,
 "rollOverBackgroundColor": [
  "#00B0AA"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "popUpShadowColor": "#000000",
 "fontWeight": "bold",
 "arrowBeforeLabel": false,
 "popUpFontColor": "#FFFFFF",
 "popUpShadowSpread": 1
},
{
 "textDecoration": "none",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#004B5A"
 ],
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "propagateClick": false,
 "paddingLeft": 0,
 "data": {
  "name": "Button Settings"
 },
 "paddingRight": 0,
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "width": 60,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 17,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "class": "Button",
 "iconBeforeLabel": true,
 "verticalAlign": "middle",
 "height": 60,
 "layout": "horizontal",
 "mode": "toggle",
 "minWidth": 1,
 "fontSize": 12,
 "shadowBlurRadius": 6,
 "gap": 5,
 "backgroundColor": [
  "#004B5A"
 ],
 "paddingTop": 0,
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "fontStyle": "normal",
 "backgroundOpacity": 1,
 "rollOverBackgroundColor": [
  "#00B0AA"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "iconWidth": 17,
 "cursor": "hand",
 "rollOverBackgroundOpacity": 1,
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "width": "85%"
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "width": 8,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#F7931E"
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "orange line"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "propagateClick": false,
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "height": "100%",
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "width": "50%"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "class": "IconButton",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "height": "75%",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "height": 140,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "header"
 },
 "overflow": "scroll",
 "width": "100%"
},
{
 "itemThumbnailWidth": 220,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "paddingLeft": 70,
 "scrollBarColor": "#F7931E",
 "horizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemLabelHorizontalAlign": "center",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemMode": "normal",
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowColor": "#F7931E",
 "scrollBarOpacity": 0.5,
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Montserrat",
 "minWidth": 1,
 "itemPaddingLeft": 3,
 "itemMaxWidth": 1000,
 "selectedItemLabelFontColor": "#F7931E",
 "itemLabelPosition": "bottom",
 "height": "92%",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemHorizontalAlign": "center",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "itemThumbnailBorderRadius": 0,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "itemBackgroundColorRatios": [],
 "propagateClick": false,
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "paddingRight": 70,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#F7931E",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "ThumbnailGrid",
 "bottom": -0.2,
 "itemLabelFontSize": 13,
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "gap": 26,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemThumbnailShadow": false,
 "paddingBottom": 70,
 "borderRadius": 5,
 "itemPaddingBottom": 3,
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelGap": 7,
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "propagateClick": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "class": "WebFrame",
 "width": "100%",
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "class": "IconButton",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "height": "75%",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 }
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 1,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "class": "ViewerArea",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "propagateClick": false,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 140,
 "gap": 10,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "header"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "width": "100%"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container photo"
 },
 "overflow": "visible",
 "width": "100%"
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "width": "55%"
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "width": 8,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#F7931E"
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "orange line"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "propagateClick": false,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "height": "100%",
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "width": "45%"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "class": "IconButton",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "height": "75%",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_5DAB6ADF_1D90_4D68_4185_3DE3578F747A",
 "propagateClick": false,
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "children": [
  "this.Image_5DAB7ADF_1D90_4D68_4195_C48DE45103CF"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "gap": 10,
 "height": "100%",
 "paddingTop": 10,
 "shadow": false,
 "paddingBottom": 10,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "width": "85%"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_5DAB5ADF_1D90_4D68_419F_487A0744F4A5",
 "propagateClick": false,
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "children": [
  "this.Container_5DAB3ADF_1D90_4D68_41B2_9D9E66103B43",
  "this.Container_5DAB0ADF_1D90_4D68_41A4_E4EA7D4C5F2E",
  "this.Container_5DABAADF_1D90_4D68_41A3_8A91A1727B11"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "height": "100%",
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "width": "50%"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_5DA86ADF_1D90_4D68_41A7_DB22CDD35E88",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "class": "IconButton",
 "iconURL": "skin/IconButton_5DA86ADF_1D90_4D68_41A7_DB22CDD35E88.jpg",
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_5DA87ADF_1D90_4D68_4191_AA9873966091, false, 0, null, null, false)",
 "height": "75%",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_5DA86ADF_1D90_4D68_41A7_DB22CDD35E88_rollover.jpg",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 }
},
{
 "maxHeight": 1000,
 "propagateClick": false,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "Image",
 "width": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "data": {
  "name": "photo"
 },
 "maxWidth": 2000
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "right",
 "gap": 0,
 "height": 60,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "width": "100%"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "width": "100%"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container space"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "right",
 "class": "IconButton",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "verticalAlign": "top",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "height": "36.14%",
 "width": "100%",
 "top": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "right",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "verticalAlign": "top",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "height": "36.14%",
 "width": "100%",
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 1,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "top": "0%",
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "bottom": "20%",
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "horizontalAlign": "center",
 "width": "14.22%",
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "bottom": "20%",
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "horizontalAlign": "center",
 "width": "14.22%",
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "right",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "verticalAlign": "top",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "height": "10%",
 "width": "10%",
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "propagateClick": false,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "Image",
 "width": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "data": {
  "name": "Image"
 },
 "maxWidth": 2000
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "right",
 "gap": 0,
 "height": 60,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "width": "100%"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "width": "100%"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container space"
 }
},
{
 "maxHeight": 1000,
 "propagateClick": false,
 "id": "Image_5DAB7ADF_1D90_4D68_4195_C48DE45103CF",
 "left": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_5DAB7ADF_1D90_4D68_4195_C48DE45103CF.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "Image",
 "width": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "data": {
  "name": "Image"
 },
 "maxWidth": 2000
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_5DAB3ADF_1D90_4D68_41B2_9D9E66103B43",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "right",
 "gap": 0,
 "height": 60,
 "paddingTop": 20,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "width": "100%"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_5DAB0ADF_1D90_4D68_41A4_E4EA7D4C5F2E",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_5DAB1ADF_1D90_4D68_4196_8CC05630C9EC",
  "this.Container_5DABEADF_1D90_4D68_41A8_25A1BEC9CC7B",
  "this.HTMLText_5DABCADF_1D90_4D68_41B3_2BE9F73D6EDB",
  "this.Button_5DABDADF_1D90_4D68_41AA_97941F99F2FA"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "width": "100%"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_5DABAADF_1D90_4D68_41A3_8A91A1727B11",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container space"
 }
},
{
 "propagateClick": false,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#F7931E",
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "width": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:6.89vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.86vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.86vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.3vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "propagateClick": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "width": 180,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "class": "Button",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "fontSize": "1.96vh",
 "label": "LOREM IPSUM",
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingTop": 0,
 "fontStyle": "normal",
 "backgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "bold"
},
{
 "propagateClick": false,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "45%",
 "width": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:6.89vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "height": "80%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "- content"
 },
 "overflow": "scroll",
 "width": "100%"
},
{
 "propagateClick": false,
 "id": "HTMLText_5DAB1ADF_1D90_4D68_4196_8CC05630C9EC",
 "scrollBarColor": "#BBD149",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "HTMLText",
 "scrollBarOpacity": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "15%",
 "width": "96.382%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.01vh;font-family:'Otama.ep';\">Contacto</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText24905"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_5DABEADF_1D90_4D68_41A8_25A1BEC9CC7B",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "height": 7,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "data": {
  "name": "black line"
 },
 "overflow": "scroll",
 "width": "100%"
},
{
 "propagateClick": false,
 "id": "HTMLText_5DABCADF_1D90_4D68_41B3_2BE9F73D6EDB",
 "scrollBarColor": "#B3D237",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "width": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#004b5a;font-size:3.61vh;font-family:'Antonio';\"><B>Oficina de ventas</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.64vh;font-family:'Open Sans Semibold';\">Armoran Top, oficina 216. En la Calle 11 #318, Santa Gertrudis Copo. C.P. 97130. M\u00e9rida, Yucat\u00e1n.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#004b5a;font-size:3.61vh;font-family:'Antonio';\"><B>Cont\u00e1ctanos</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;font-family:'Open Sans Semibold';\">E-mail: ventas@costeracondos.com</SPAN><SPAN STYLE=\"color:#999999;font-size:1.64vh;font-family:'Open Sans Semibold';\"> </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;font-family:'Open Sans Semibold';\">Tel\u00e9fono: +52 9999138883</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;font-family:'Open Sans Semibold';\">Whatsapp: +52 9993 817765</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#08505e;font-size:3.61vh;font-family:'Antonio';\"><B>Nuestro horario</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.64vh;font-family:'Open Sans Semibold';\">Lunes a viernes de 9:00 a 17:00 hrs</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.61vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button book now"
 },
 "id": "Button_5DABDADF_1D90_4D68_41AA_97941F99F2FA",
 "propagateClick": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Antonio",
 "fontColor": "#FFFFFF",
 "width": 254,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "class": "Button",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "height": 59,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "fontSize": "3.26vh",
 "label": "Visitar sitio web",
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "backgroundColor": [
  "#004B5A"
 ],
 "paddingTop": 0,
 "click": "this.openLink('https://costeracondos.com.mx', '_blank')",
 "fontStyle": "normal",
 "backgroundOpacity": 0.7,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "bold"
},
{
 "maxHeight": 200,
 "propagateClick": false,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "horizontalAlign": "left",
 "class": "Image",
 "width": "25%",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "agent photo"
 },
 "maxWidth": 200
},
{
 "propagateClick": false,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarColor": "#F7931E",
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "width": "75%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.97vh;font-family:'Montserrat';\"><B>JOHN DOE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;font-family:'Montserrat';\">LICENSED REAL ESTATE SALESPERSON</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10
}],
 "width": "100%"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
