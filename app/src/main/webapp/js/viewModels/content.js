var vm;

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojinputnumber', 'ojs/ojmasonrylayout', 'ojs/ojlistview', 'ojs/ojarraytabledatasource'],
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

        self.allItems = ko.observableArray();

        self.dataSource = new oj.ArrayTableDataSource(self.allItems, {idAttribute: "id"});

        var lastItemId = self.allItems().length;

        self.addItem = function(item) {
            lastItemId++;
            self.allItems.push({"id": lastItemId, "item": item});
        }
    }

    vm = new contentViewModel();
    return vm;
});
