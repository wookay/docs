var documenterSearchIndex = {"docs":
[{"location":"HorizontalCalendar/#HorizontalCalendar-1","page":"HorizontalCalendar","title":"HorizontalCalendar","text":"","category":"section"},{"location":"HorizontalCalendar/#","page":"HorizontalCalendar","title":"HorizontalCalendar","text":"HorizontalCalendar","category":"page"},{"location":"HorizontalCalendar/#Calendars.HorizontalCalendar","page":"HorizontalCalendar","title":"Calendars.HorizontalCalendar","text":"HorizontalCalendar(startDate::Date,\n                   endDate::Date ;\n                   datespans::Vector{DateSpan}=[DateSpan([today()], :cyan)],\n                   cell::NamedTuple{(:size, :margin)} = (size = (2, 1), margin = (1, 0)))\n\nHorizontalCalendar(y::Year)\n\nHorizontalCalendar(m::Month, date::Date=today())\n\nHorizontalCalendar(w::Week, date::Date=today())\n\nHorizontalCalendar(d::Day, date::Date=today())\n\nHorizontalCalendar(date::Date)\n\nHorizontalCalendar()\n\nstruct HorizontalCalendar <: CalendarWall\n    startDate::Date\n    endDate::Date\n    datespans::Vector{DateSpan}\n    cell::NamedTuple{(:size, :margin)}\nend\n\n\n\n\n\n","category":"type"},{"location":"LunarCalendars/#LunarCalendars-1","page":"LunarCalendars","title":"LunarCalendars","text":"","category":"section"},{"location":"LunarCalendars/#","page":"LunarCalendars","title":"LunarCalendars","text":"Lunar\nlunar_to_solar(lunar::Lunar)\nsolar_to_lunar(solar::Date)\nLunar(solar::Date)\nLunar(::typeof(today))\nDate(lunar::Lunar)","category":"page"},{"location":"LunarCalendars/#Calendars.LunarCalendars.Lunar","page":"LunarCalendars","title":"Calendars.LunarCalendars.Lunar","text":"struct Lunar\n    year::Int\n    month::Int\n    day::Int\n    isleap::Bool\nend\n\n\n\n\n\n","category":"type"},{"location":"LunarCalendars/#Calendars.LunarCalendars.lunar_to_solar-Tuple{Lunar}","page":"LunarCalendars","title":"Calendars.LunarCalendars.lunar_to_solar","text":"     lunar_to_solar(lunar::Lunar)::Date\n\n\n\n\n\n","category":"method"},{"location":"LunarCalendars/#Calendars.LunarCalendars.solar_to_lunar-Tuple{Date}","page":"LunarCalendars","title":"Calendars.LunarCalendars.solar_to_lunar","text":"     solar_to_lunar(solar::Date)::Lunar\n\n\n\n\n\n","category":"method"},{"location":"LunarCalendars/#Calendars.LunarCalendars.Lunar-Tuple{Date}","page":"LunarCalendars","title":"Calendars.LunarCalendars.Lunar","text":"     Lunar(solar::Date)::Lunar\n\n\n\n\n\n","category":"method"},{"location":"LunarCalendars/#Calendars.LunarCalendars.Lunar-Tuple{typeof(today)}","page":"LunarCalendars","title":"Calendars.LunarCalendars.Lunar","text":"     Lunar(::typeof(today))::Lunar\n\n\n\n\n\n","category":"method"},{"location":"LunarCalendars/#Dates.Date-Tuple{Lunar}","page":"LunarCalendars","title":"Dates.Date","text":"     Date(lunar::Lunar)::Date\n\n\n\n\n\n","category":"method"},{"location":"Times/#Times-1","page":"Times","title":"Times","text":"","category":"section"},{"location":"Times/#","page":"Times","title":"Times","text":"Times.Day\nTimes.Hour\nTimes.Minute\nTimes.Second\nTimes.Millisecond\ndatetime2millisecond\nmillisecond2datetime","category":"page"},{"location":"Times/#Dates.Day","page":"Times","title":"Dates.Day","text":"     Times.Day(n::Union{Rational,AbstractFloat})::CompoundPeriod\n\n\n\n\n\n","category":"type"},{"location":"Times/#Dates.Hour","page":"Times","title":"Dates.Hour","text":"     Times.Hour(n::Union{Rational,AbstractFloat})::CompoundPeriod\n\n\n\n\n\n","category":"type"},{"location":"Times/#Dates.Minute","page":"Times","title":"Dates.Minute","text":"     Times.Minute(n::Union{Rational,AbstractFloat})::CompoundPeriod\n\n\n\n\n\n","category":"type"},{"location":"Times/#Dates.Second","page":"Times","title":"Dates.Second","text":"     Times.Second(n::Union{Rational,AbstractFloat})::CompoundPeriod\n\n\n\n\n\n","category":"type"},{"location":"Times/#Dates.Millisecond","page":"Times","title":"Dates.Millisecond","text":"     Times.Millisecond(n::Union{Rational,AbstractFloat})::CompoundPeriod\n\n\n\n\n\n","category":"type"},{"location":"Times/#Calendars.Times.datetime2millisecond","page":"Times","title":"Calendars.Times.datetime2millisecond","text":"     datetime2millisecond(dt::DateTime)::Int64\n\n\n\n\n\n","category":"function"},{"location":"Times/#Calendars.Times.millisecond2datetime","page":"Times","title":"Calendars.Times.millisecond2datetime","text":"     millisecond2datetime(millisecond::Int64)::DateTime\n\n\n\n\n\n","category":"function"},{"location":"VerticalCalendar/#VerticalCalendar-1","page":"VerticalCalendar","title":"VerticalCalendar","text":"","category":"section"},{"location":"VerticalCalendar/#","page":"VerticalCalendar","title":"VerticalCalendar","text":"VerticalCalendar\nDateSpan","category":"page"},{"location":"VerticalCalendar/#Calendars.VerticalCalendar","page":"VerticalCalendar","title":"Calendars.VerticalCalendar","text":"VerticalCalendar(startDate::Date,\n                 endDate::Date ;\n                 datespans::Vector{DateSpan}=[DateSpan([today()], :cyan)],\n                 cell::NamedTuple{(:size, :margin)} = (size = (2, 1), margin = (1, 0)))\n\nVerticalCalendar(y::Year)\n\nVerticalCalendar(m::Month, date::Date=today())\n\nVerticalCalendar(w::Week, date::Date=today())\n\nVerticalCalendar(d::Day, date::Date=today())\n\nVerticalCalendar(date::Date)\n\nVerticalCalendar()\n\nstruct VerticalCalendar <: CalendarWall\n    startDate::Date\n    endDate::Date\n    datespans::Vector{DateSpan}\n    cell::NamedTuple{(:size, :margin)}\nend\n\n\n\n\n\n","category":"type"},{"location":"VerticalCalendar/#Calendars.DateSpan","page":"VerticalCalendar","title":"Calendars.DateSpan","text":"struct DateSpan\n    dates::Vector{Date}\n    color::Symbol\nend\n\n\n\n\n\n","category":"type"},{"location":"#Calendars.jl-1","page":"Home","title":"Calendars.jl 🗓","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"https://github.com/wookay/Calendars.jl","category":"page"},{"location":"#VerticalCalendar-1","page":"Home","title":"VerticalCalendar","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"julia> using Calendars\n\njulia> VerticalCalendar(Date(2019,1,1), Date(2019,3,31))\n    2019\n    Jan         Feb         Mar\n        6 13 20 27  3 10 17 24  3 10 17 24 31\nMon     7 14 21 28  4 11 18 25  4 11 18 25\n     1  8 15 22 29  5 12 19 26  5 12 19 26\nWed  2  9 16 23 30  6 13 20 27  6 13 20 27\n     3 10 17 24 31  7 14 21 28  7 14 21 28\nFri  4 11 18 25  1  8 15 22  1  8 15 22 29\n     5 12 19 26  2  9 16 23  2  9 16 23 30\n\njulia> VerticalCalendar(Date(2020,1))\n    2020\n    Jan\n        5 12 19 26\nMon     6 13 20 27\n        7 14 21 28\nWed  1  8 15 22 29\n     2  9 16 23 30\nFri  3 10 17 24 31\n     4 11 18 25\n\njulia> VerticalCalendar(Date(2018,11,15), Date(2019,3,20), datespans=[DateSpan(Date(2018,12,25):Day(1):Date(2019,1,2), :green)])\n          2018           2019\n          Dec            Jan         Feb         Mar\n       18 25  2  9 16 23 30  6 13 20 27  3 10 17 24  3 10 17\nMon    19 26  3 10 17 24 31  7 14 21 28  4 11 18 25  4 11 18\n       20 27  4 11 18 25  1  8 15 22 29  5 12 19 26  5 12 19\nWed    21 28  5 12 19 26  2  9 16 23 30  6 13 20 27  6 13 20\n    15 22 29  6 13 20 27  3 10 17 24 31  7 14 21 28  7 14\nFri 16 23 30  7 14 21 28  4 11 18 25  1  8 15 22  1  8 15\n    17 24  1  8 15 22 29  5 12 19 26  2  9 16 23  2  9 16","category":"page"},{"location":"#HorizontalCalendar-1","page":"Home","title":"HorizontalCalendar","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"julia> using Calendars\n\njulia> HorizontalCalendar(Date(2020,1))\n     Su Mo Tu We Th Fr Sa\nJan            1  2  3  4\n2020  5  6  7  8  9 10 11\n     12 13 14 15 16 17 18\n     19 20 21 22 23 24 25\n     26 27 28 29 30 31","category":"page"},{"location":"#Times-1","page":"Home","title":"Times","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"using Calendars.Times\n\nDay(0.5) + Hour(0.5) + Minute(0.5) == Hour(12) + Minute(30) + Second(30)\n\nMinute(1) + Second(1) < Minute(1) + Second(2)","category":"page"},{"location":"#LunarCalendars-1","page":"Home","title":"LunarCalendars","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Based on wolfhong's LunarCalendar converter.py","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> using Calendars.LunarCalendars\n\njulia> Lunar(Date(2020, 4, 23))\nLunar(2020, 4, 1, false)\n\njulia> Lunar(Date(2020, 5, 23))\nLunar(2020, 4, 1, true)","category":"page"}]
}
