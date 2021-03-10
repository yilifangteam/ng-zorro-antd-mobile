export function getEventTarget(event) {
    if (event.type === 'mousedown' ||
        event.type === 'mousemove' ||
        event.type === 'mouseup' ||
        event.type === 'mouseleave') {
        return event;
    }
    else {
        if (event && event.changedTouches && event.changedTouches[0]) {
            return event.changedTouches[0];
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91Y2gtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvcmUvdXRpbC90b3VjaC1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQUs7SUFDbEMsSUFDRSxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVc7UUFDMUIsS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXO1FBQzFCLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUztRQUN4QixLQUFLLENBQUMsSUFBSSxLQUFLLFlBQVksRUFDM0I7UUFDQSxPQUFPLEtBQUssQ0FBQztLQUNkO1NBQU07UUFDTCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsY0FBYyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDNUQsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO0tBQ0Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50VGFyZ2V0KGV2ZW50KSB7XG4gIGlmIChcbiAgICBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyB8fFxuICAgIGV2ZW50LnR5cGUgPT09ICdtb3VzZW1vdmUnIHx8XG4gICAgZXZlbnQudHlwZSA9PT0gJ21vdXNldXAnIHx8XG4gICAgZXZlbnQudHlwZSA9PT0gJ21vdXNlbGVhdmUnXG4gICkge1xuICAgIHJldHVybiBldmVudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0pIHtcbiAgICAgIHJldHVybiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==