define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton'],
function(oj, ko, $)
{
    function buttonModel()
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

    return new buttonModel();
});

