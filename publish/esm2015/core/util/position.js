export function getAllStyles(element) {
    return window.getComputedStyle(element);
}
export function getStyle(element, prop) {
    return getAllStyles(element)[prop];
}
export function isStaticPositioned(element) {
    return (getStyle(element, 'position') || 'static') === 'static';
}
export function getOffsetParent(element) {
    let offsetParentEl = element.offsetParent || document.documentElement;
    while (offsetParentEl && offsetParentEl !== document.documentElement && isStaticPositioned(offsetParentEl)) {
        offsetParentEl = offsetParentEl.offsetParent;
    }
    return offsetParentEl || document.documentElement;
}
export function getOffset(element) {
    let elBcr = element.getBoundingClientRect();
    let viewportOffset = {
        top: window.pageYOffset - document.documentElement.clientTop,
        left: window.pageXOffset - document.documentElement.clientLeft
    };
    let elOffset = {
        height: elBcr.height || element.offsetHeight,
        width: elBcr.width || element.offsetWidth,
        top: elBcr.top + viewportOffset.top,
        bottom: elBcr.bottom + viewportOffset.top,
        left: elBcr.left + viewportOffset.left,
        right: elBcr.right + viewportOffset.left
    };
    return elOffset;
}
export function getPosition(element) {
    let elPosition;
    let parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
    if (getStyle(element, 'position') === 'fixed') {
        elPosition = element.getBoundingClientRect();
    }
    else {
        let offsetParentEl = getOffsetParent(element);
        elPosition = getOffset(element);
        if (offsetParentEl !== document.documentElement) {
            parentOffset = getOffset(offsetParentEl);
        }
        parentOffset.top += offsetParentEl.clientTop;
        parentOffset.left += offsetParentEl.clientLeft;
    }
    elPosition.top -= parentOffset.top;
    elPosition.bottom -= parentOffset.top;
    elPosition.left -= parentOffset.left;
    elPosition.right -= parentOffset.left;
    return elPosition;
}
export function getPositionElements(hostElement, targetElement, placement, appendToBody) {
    let hostElPosition = appendToBody ? getOffset(hostElement) : getPosition(hostElement);
    let targetElStyles = getAllStyles(targetElement);
    let targetElBCR = targetElement.getBoundingClientRect();
    let placementPrimary = placement.split('-')[0] || 'top';
    let placementSecondary = placement.split('-')[1] || 'center';
    let targetElPosition = {
        height: targetElBCR.height || targetElement.offsetHeight,
        width: targetElBCR.width || targetElement.offsetWidth,
        top: 0,
        bottom: targetElBCR.height || targetElement.offsetHeight,
        left: 0,
        right: targetElBCR.width || targetElement.offsetWidth
    };
    switch (placementPrimary) {
        case 'top':
            targetElPosition.top =
                hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
            break;
        case 'bottom':
            targetElPosition.top = hostElPosition.top + hostElPosition.height;
            break;
        case 'left':
            targetElPosition.left =
                hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
            break;
        case 'right':
            targetElPosition.left = hostElPosition.left + hostElPosition.width;
            break;
    }
    switch (placementSecondary) {
        case 'top':
            targetElPosition.top = hostElPosition.top;
            break;
        case 'bottom':
            targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
            break;
        case 'left':
            targetElPosition.left = hostElPosition.left;
            break;
        case 'right':
            targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
            break;
        case 'center':
            if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
            }
            else {
                targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
            }
            break;
    }
    targetElPosition.top = Math.round(targetElPosition.top);
    targetElPosition.bottom = Math.round(targetElPosition.bottom);
    targetElPosition.left = Math.round(targetElPosition.left);
    targetElPosition.right = Math.round(targetElPosition.right);
    return targetElPosition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24uanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvcmUvdXRpbC9wb3NpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsWUFBWSxDQUFDLE9BQU87SUFDbEMsT0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUNELE1BQU0sVUFBVSxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUk7SUFDcEMsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUNELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxPQUFPO0lBQ3hDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNsRSxDQUFDO0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxPQUFPO0lBQ3JDLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQztJQUN0RSxPQUFPLGNBQWMsSUFBSSxjQUFjLEtBQUssUUFBUSxDQUFDLGVBQWUsSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUMxRyxjQUFjLEdBQUcsY0FBYyxDQUFDLFlBQVksQ0FBQztLQUM5QztJQUNELE9BQU8sY0FBYyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFDcEQsQ0FBQztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsT0FBTztJQUMvQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUM1QyxJQUFJLGNBQWMsR0FBRztRQUNuQixHQUFHLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVM7UUFDNUQsSUFBSSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsUUFBUSxD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QUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1lBQy9GLE1BQU07UUFDUixLQUFLLFFBQVE7WUFDWCxJQUFJLGdCQUFnQixLQUFLLEtBQUssSUFBSSxnQkFBZ0IsS0FBSyxRQUFRLEVBQUU7Z0JBQy9ELGdCQUFnQixDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2FBQ3hHO2lCQUFNO2dCQUNMLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ3hHO1lBQ0QsTUFBTTtLQUNUO0lBQ0QsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEQsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUQsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsT0FBTyxnQkFBZ0IsQ0FBQztBQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFN0eWxlcyhlbGVtZW50KSB7XG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZShlbGVtZW50LCBwcm9wKSB7XG4gIHJldHVybiBnZXRBbGxTdHlsZXMoZWxlbWVudClbcHJvcF07XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdGF0aWNQb3NpdGlvbmVkKGVsZW1lbnQpIHtcbiAgcmV0dXJuIChnZXRTdHlsZShlbGVtZW50LCAncG9zaXRpb24nKSB8fCAnc3RhdGljJykgPT09ICdzdGF0aWMnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IG9mZnNldFBhcmVudEVsID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB3aGlsZSAob2Zmc2V0UGFyZW50RWwgJiYgb2Zmc2V0UGFyZW50RWwgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBpc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50RWwpKSB7XG4gICAgb2Zmc2V0UGFyZW50RWwgPSBvZmZzZXRQYXJlbnRFbC5vZmZzZXRQYXJlbnQ7XG4gIH1cbiAgcmV0dXJuIG9mZnNldFBhcmVudEVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldChlbGVtZW50KSB7XG4gIGxldCBlbEJjciA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCB2aWV3cG9ydE9mZnNldCA9IHtcbiAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AsXG4gICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnRcbiAgfTtcbiAgbGV0IGVsT2Zmc2V0ID0ge1xuICAgIGhlaWdodDogZWxCY3IuaGVpZ2h0IHx8IGVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgIHdpZHRoOiBlbEJjci53aWR0aCB8fCBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgIHRvcDogZWxCY3IudG9wICsgdmlld3BvcnRPZmZzZXQudG9wLFxuICAgIGJvdHRvbTogZWxCY3IuYm90dG9tICsgdmlld3BvcnRPZmZzZXQudG9wLFxuICAgIGxlZnQ6IGVsQmNyLmxlZnQgKyB2aWV3cG9ydE9mZnNldC5sZWZ0LFxuICAgIHJpZ2h0OiBlbEJjci5yaWdodCArIHZpZXdwb3J0T2Zmc2V0LmxlZnRcbiAgfTtcbiAgcmV0dXJuIGVsT2Zmc2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oZWxlbWVudCkge1xuICBsZXQgZWxQb3NpdGlvbjtcbiAgbGV0IHBhcmVudE9mZnNldCA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCwgdG9wOiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHJpZ2h0OiAwIH07XG4gIGlmIChnZXRTdHlsZShlbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgIGVsUG9zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9IGVsc2Uge1xuICAgIGxldCBvZmZzZXRQYXJlbnRFbCA9IGdldE9mZnNldFBhcmVudChlbGVtZW50KTtcbiAgICBlbFBvc2l0aW9uID0gZ2V0T2Zmc2V0KGVsZW1lbnQpO1xuICAgIGlmIChvZmZzZXRQYXJlbnRFbCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBwYXJlbnRPZmZzZXQgPSBnZXRPZmZzZXQob2Zmc2V0UGFyZW50RWwpO1xuICAgIH1cbiAgICBwYXJlbnRPZmZzZXQudG9wICs9IG9mZnNldFBhcmVudEVsLmNsaWVudFRvcDtcbiAgICBwYXJlbnRPZmZzZXQubGVmdCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRMZWZ0O1xuICB9XG4gIGVsUG9zaXRpb24udG9wIC09IHBhcmVudE9mZnNldC50b3A7XG4gIGVsUG9zaXRpb24uYm90dG9tIC09IHBhcmVudE9mZnNldC50b3A7XG4gIGVsUG9zaXRpb24ubGVmdCAtPSBwYXJlbnRPZmZzZXQubGVmdDtcbiAgZWxQb3NpdGlvbi5yaWdodCAtPSBwYXJlbnRPZmZzZXQubGVmdDtcbiAgcmV0dXJuIGVsUG9zaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbkVsZW1lbnRzKGhvc3RFbGVtZW50LCB0YXJnZXRFbGVtZW50LCBwbGFjZW1lbnQsIGFwcGVuZFRvQm9keSkge1xuICBsZXQgaG9zdEVsUG9zaXRpb24gPSBhcHBlbmRUb0JvZHkgPyBnZXRPZmZzZXQoaG9zdEVsZW1lbnQpIDogZ2V0UG9zaXRpb24oaG9zdEVsZW1lbnQpO1xuICBsZXQgdGFyZ2V0RWxTdHlsZXMgPSBnZXRBbGxTdHlsZXModGFyZ2V0RWxlbWVudCk7XG4gIGxldCB0YXJnZXRFbEJDUiA9IHRhcmdldEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCBwbGFjZW1lbnRQcmltYXJ5ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF0gfHwgJ3RvcCc7XG4gIGxldCBwbGFjZW1lbnRTZWNvbmRhcnkgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXSB8fCAnY2VudGVyJztcbiAgbGV0IHRhcmdldEVsUG9zaXRpb24gPSB7XG4gICAgaGVpZ2h0OiB0YXJnZXRFbEJDUi5oZWlnaHQgfHwgdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgd2lkdGg6IHRhcmdldEVsQkNSLndpZHRoIHx8IHRhcmdldEVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogdGFyZ2V0RWxCQ1IuaGVpZ2h0IHx8IHRhcmdldEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IHRhcmdldEVsQkNSLndpZHRoIHx8IHRhcmdldEVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgfTtcbiAgc3dpdGNoIChwbGFjZW1lbnRQcmltYXJ5KSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIHRhcmdldEVsUG9zaXRpb24udG9wID1cbiAgICAgICAgaG9zdEVsUG9zaXRpb24udG9wIC0gKHRhcmdldEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgcGFyc2VGbG9hdCh0YXJnZXRFbFN0eWxlcy5tYXJnaW5Cb3R0b20pKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICB0YXJnZXRFbFBvc2l0aW9uLnRvcCA9IGhvc3RFbFBvc2l0aW9uLnRvcCArIGhvc3RFbFBvc2l0aW9uLmhlaWdodDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5sZWZ0ID1cbiAgICAgICAgaG9zdEVsUG9zaXRpb24ubGVmdCAtICh0YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoICsgcGFyc2VGbG9hdCh0YXJnZXRFbFN0eWxlcy5tYXJnaW5SaWdodCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5sZWZ0ID0gaG9zdEVsUG9zaXRpb24ubGVmdCArIGhvc3RFbFBvc2l0aW9uLndpZHRoO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgc3dpdGNoIChwbGFjZW1lbnRTZWNvbmRhcnkpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgdGFyZ2V0RWxQb3NpdGlvbi50b3AgPSBob3N0RWxQb3NpdGlvbi50b3A7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgdGFyZ2V0RWxQb3NpdGlvbi50b3AgPSBob3N0RWxQb3NpdGlvbi50b3AgKyBob3N0RWxQb3NpdGlvbi5oZWlnaHQgLSB0YXJnZXRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5sZWZ0ID0gaG9zdEVsUG9zaXRpb24ubGVmdDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHRhcmdldEVsUG9zaXRpb24ubGVmdCA9IGhvc3RFbFBvc2l0aW9uLmxlZnQgKyBob3N0RWxQb3NpdGlvbi53aWR0aCAtIHRhcmdldEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjZW50ZXInOlxuICAgICAgaWYgKHBsYWNlbWVudFByaW1hcnkgPT09ICd0b3AnIHx8IHBsYWNlbWVudFByaW1hcnkgPT09ICdib3R0b20nKSB7XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24ubGVmdCA9IGhvc3RFbFBvc2l0aW9uLmxlZnQgKyBob3N0RWxQb3NpdGlvbi53aWR0aCAvIDIgLSB0YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoIC8gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldEVsUG9zaXRpb24udG9wID0gaG9zdEVsUG9zaXRpb24udG9wICsgaG9zdEVsUG9zaXRpb24uaGVpZ2h0IC8gMiAtIHRhcmdldEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMjtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG4gIHRhcmdldEVsUG9zaXRpb24udG9wID0gTWF0aC5yb3VuZCh0YXJnZXRFbFBvc2l0aW9uLnRvcCk7XG4gIHRhcmdldEVsUG9zaXRpb24uYm90dG9tID0gTWF0aC5yb3VuZCh0YXJnZXRFbFBvc2l0aW9uLmJvdHRvbSk7XG4gIHRhcmdldEVsUG9zaXRpb24ubGVmdCA9IE1hdGgucm91bmQodGFyZ2V0RWxQb3NpdGlvbi5sZWZ0KTtcbiAgdGFyZ2V0RWxQb3NpdGlvbi5yaWdodCA9IE1hdGgucm91bmQodGFyZ2V0RWxQb3NpdGlvbi5yaWdodCk7XG4gIHJldHVybiB0YXJnZXRFbFBvc2l0aW9uO1xufVxuIl19