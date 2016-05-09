define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton'],
function(oj, ko, $)
{
    function buttonModel()
    {
        var self = this;
        self.click_start_button = function(data, event)
        {
            startJob("start !");
        }
    }

    return new buttonModel();
});

