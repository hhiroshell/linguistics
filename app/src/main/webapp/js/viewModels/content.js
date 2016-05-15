var contentViewModel = {};

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton'],
function(oj, ko, $)
{
    function contentViewModel()
    {
        var self = this;
        self.click_start_button = function()
        {
            sendMessage(JSON.stringify({
                partitions: 2,
                threads: 2
            }));
        }
    }

    return new contentViewModel();
});

