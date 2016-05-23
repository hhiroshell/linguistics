var vm;

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojbutton', 'ojs/ojinputnumber', 'ojs/ojmasonrylayout', 'ojs/ojlistview', 'ojs/ojarraytabledatasource', 'ojs/ojmenu', 'ojs/ojgauge'],
function(oj, ko, $)
{
    function contentViewModel()
    {
        var self = this;

        self.click_start_button = function()
        {
            sendMessage(JSON.stringify({
                partitions: $("#inputnumber-partitions").ojInputNumber("option", "value"),
                threads: $("#inputnumber-threads").ojInputNumber("option", "value")
            }));
        }

        self.partitions = [
            {name: '#1'},
            {name: '#2'},
            {name: '#3'},
            {name: '#4'},
            {name: '#5'},
            {name: '#6'},
            {name: '#7'},
            {name: '#8'},
        ];

        getTileId = function(index)
        {
            return 'tile' + (index);
        };
        getProgressId = function(index)
        {
            return 'progress' + (index);
        };
        getAuthorId = function(index)
        {
            return 'author' + (index);
        };
        getPieceId = function(index)
        {
            return 'piece' + (index);
        };

        self.laps = ko.observableArray();

        self.lapsDataSource = new oj.ArrayTableDataSource(self.laps, {idAttribute: "lap"});

        var lastLapIndex = self.laps().length;

        self.addLap = function(lap) {
            lastLapIndex++;
            var id = {lap: "L" + lastLapIndex};
            self.laps.unshift($.extend(id, lap));
        }

    }

    vm = new contentViewModel();
    return vm;
});
