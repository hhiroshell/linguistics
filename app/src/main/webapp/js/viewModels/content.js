var vm;

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojbutton', 'ojs/ojinputnumber', 'ojs/ojmasonrylayout', 'ojs/ojlistview', 'ojs/ojarraytabledatasource', 'ojs/ojmenu'],
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
            {name: 'Partition 1'},
            {name: 'Partition 2'},
            {name: 'Partition 3'},
            {name: 'Partition 4'},
            {name: 'Partition 5'},
            {name: 'Partition 6'},
            {name: 'Partition 7'},
            {name: 'Partition 8'},
            {name: 'Partition 9'},
            {name: 'Partition 10'},
        ];

        getTileId = function(index)
        {
            return 'tile' + (index);
        };
        getProgressId = function(index)
        {
            return 'progress' + (index);
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
