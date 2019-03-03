export class Clock {
    countdown(eventDate): void {
        var now = new Date();
        var eventDate = eventDate;

        var currentTime = now.getTime();
        var eventTime = eventDate.getTime();

        var remTime = eventTime - currentTime;

        var s = Math.floor(remTime / 1000);
        var m = Math.floor(s / 60);
        var h = Math.floor(m / 60);
        var d = Math.floor(h / 24);

        h %= 24;
        m %= 60;
        s %= 60;

        //h = (h < 10) ? "0" + h : h;
        var days = (d < 10) ? "0" + d.toString() : d.toString();
        var hours = (h < 10) ? "0" + h.toString() : h.toString();
        var minutes = (m < 10) ? "0" + m.toString() : m.toString();
        var seconds = (s < 10) ? "0" + s.toString() : s.toString();

        $(".clock-days").text(days);
        $(".clock-hours").text(hours);
        $(".clock-minutes").text(minutes);
        $(".clock-seconds").text(seconds);

    }
}