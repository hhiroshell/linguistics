var vm;

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojbutton', 'ojs/ojinputnumber', 'ojs/ojmasonrylayout', 'ojs/ojlistview', 'ojs/ojarraytabledatasource', 'ojs/ojmenu', 'ojs/ojdialog', 'ojs/ojprogressbar'],
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

        self.partitions = ko.observableArray([
            {name: '#1'},
            {name: '#2'},
            {name: '#3'},
            {name: '#4'},
            {name: '#5'},
            {name: '#6'},
            {name: '#7'},
            {name: '#8'},
        ]);

        self.updateProgress = function(pid, processed) {
            self.partitions.splice(pid, 1, {processed: processed});
        }

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
        getLabelId = function(index)
        {
            return 'label' + (index);
        };

        self.laps = ko.observableArray();

        self.lapsDataSource = new oj.ArrayTableDataSource(self.laps, {idAttribute: "lap"});

        var lastLapIndex = self.laps().length;

        self.addLap = function(lap) {
            lastLapIndex++;
            var id = {lap: "L" + lastLapIndex};
            self.laps.unshift($.extend(id, lap));
        }

        self.handleOpen = function() {
            $("#modalDialog1").ojDialog("open");
        }

        self.handleClose = function() {
            $("#modalDialog1").ojDialog("close");
        }

        self.disableControls = ko.observable(false);

    }

    vm = new contentViewModel();
    return vm;
});
