export const mergeDateTime = (date, time) => {
    date = date || new Date();
    if (!time) {
        return date;
    }
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
};
export const formatDate = (date, format, locale) => {
    const week = locale && locale.week;
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'w+': week && week[date.getDay()],
        S: date.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return format;
};
export const isSameDate = (day_one, day_two) => {
    if (!day_one || !day_two) {
        console.error('isSameDate function need two params');
        return 'need two params';
    }
    const compareDate = day_one.getDate() === day_two.getDate();
    const compareMonth = day_one.getMonth() === day_two.getMonth();
    const compareYear = day_one.getFullYear() === day_two.getFullYear();
    return compareDate && compareMonth && compareYear;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vLi4vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL3V0aWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsSUFBVyxFQUFFLElBQVcsRUFBRSxFQUFFO0lBQ3hELElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELE9BQU8sSUFBSSxJQUFJLENBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFLEVBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUNkLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLEVBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FDbEIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQVUsRUFBRSxNQUFjLEVBQUUsTUFBMEIsRUFBRSxFQUFFO0lBQ25GLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBRW5DLElBQUksQ0FBQyxHQUEyQjtRQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7UUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRTtLQUMxQixDQUFDO0lBQ0YsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3ZCLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDNUY7SUFDRCxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNmLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDN0c7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQWEsRUFBRSxPQUFhLEVBQUUsRUFBRTtJQUN6RCxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUNyRCxPQUFPLGlCQUFpQixDQUFDO0tBQzFCO0lBQ0QsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1RCxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9ELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFcEUsT0FBTyxXQUFXLElBQUksWUFBWSxJQUFJLFdBQVcsQ0FBQztBQUNwRCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlTW9kZWxzIH0gZnJvbSAnLi4vZGF0ZS9EYXRhVHlwZXMnO1xuXG5leHBvcnQgY29uc3QgbWVyZ2VEYXRlVGltZSA9IChkYXRlPzogRGF0ZSwgdGltZT86IERhdGUpID0+IHtcbiAgZGF0ZSA9IGRhdGUgfHwgbmV3IERhdGUoKTtcbiAgaWYgKCF0aW1lKSB7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKFxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgZGF0ZS5nZXREYXRlKCksXG4gICAgdGltZS5nZXRIb3VycygpLFxuICAgIHRpbWUuZ2V0TWludXRlcygpLFxuICAgIHRpbWUuZ2V0U2Vjb25kcygpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgbG9jYWxlPzogRGF0ZU1vZGVscy5Mb2NhbGUpID0+IHtcbiAgY29uc3Qgd2VlayA9IGxvY2FsZSAmJiBsb2NhbGUud2VlaztcblxuICBsZXQgbzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAnTSsnOiBkYXRlLmdldE1vbnRoKCkgKyAxLFxuICAgICdkKyc6IGRhdGUuZ2V0RGF0ZSgpLFxuICAgICdoKyc6IGRhdGUuZ2V0SG91cnMoKSxcbiAgICAnbSsnOiBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAncysnOiBkYXRlLmdldFNlY29uZHMoKSxcbiAgICAncSsnOiBNYXRoLmZsb29yKChkYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLFxuICAgICd3Kyc6IHdlZWsgJiYgd2Vla1tkYXRlLmdldERheSgpXSxcbiAgICBTOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpXG4gIH07XG4gIGlmICgvKHkrKS8udGVzdChmb3JtYXQpKSB7XG4gICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoUmVnRXhwLiQxLCAoZGF0ZS5nZXRGdWxsWWVhcigpICsgJycpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xuICB9XG4gIGZvciAobGV0IGsgaW4gbykge1xuICAgIGlmIChuZXcgUmVnRXhwKCcoJyArIGsgKyAnKScpLnRlc3QoZm9ybWF0KSkge1xuICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoUmVnRXhwLiQxLCBSZWdFeHAuJDEubGVuZ3RoID09IDEgPyBvW2tdIDogKCcwMCcgKyBvW2tdKS5zdWJzdHIoKCcnICsgb1trXSkubGVuZ3RoKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59O1xuXG5leHBvcnQgY29uc3QgaXNTYW1lRGF0ZSA9IChkYXlfb25lOiBEYXRlLCBkYXlfdHdvOiBEYXRlKSA9PiB7XG4gIGlmICghZGF5X29uZSB8fCAhZGF5X3R3bykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2lzU2FtZURhdGUgZnVuY3Rpb24gbmVlZCB0d28gcGFyYW1zJyk7XG4gICAgcmV0dXJuICduZWVkIHR3byBwYXJhbXMnO1xuICB9XG4gIGNvbnN0IGNvbXBhcmVEYXRlID0gZGF5X29uZS5nZXREYXRlKCkgPT09IGRheV90d28uZ2V0RGF0ZSgpO1xuICBjb25zdCBjb21wYXJlTW9udGggPSBkYXlfb25lLmdldE1vbnRoKCkgPT09IGRheV90d28uZ2V0TW9udGgoKTtcbiAgY29uc3QgY29tcGFyZVllYXIgPSBkYXlfb25lLmdldEZ1bGxZZWFyKCkgPT09IGRheV90d28uZ2V0RnVsbFllYXIoKTtcblxuICByZXR1cm4gY29tcGFyZURhdGUgJiYgY29tcGFyZU1vbnRoICYmIGNvbXBhcmVZZWFyO1xufTtcbiJdfQ==