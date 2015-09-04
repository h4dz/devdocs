---
title: Manually Trigger an Incident
layout: main
permalink: /documentation/howto/manually-trigger-an-incident/
---
<h1 class="title">
  Manually Trigger an Incident
</h1>
<p>
  Triggering an incident manually within PagerDuty can happen several ways: through the dashboard, via email, or via our API. The first two methods are covered extensively in our <a href="https://support.pagerduty.com/hc/en-us/articles/202829230-How-to-Trigger-an-Incident-Through-the-Dashboard-Email-Or-The-API">support documentation</a>, so we'll go over using the incident API.
</p>
<p>
  To trigger an incident via the API, you'll need a service key. You can find this information on the Services page or via a service's settings. The following code sample will use PDJS, but you can trigger incidents via any library or language that can work with HTTP and JSON.
</p>

<pre>
<code class="prettyprint language-javascript">// Set up the library
PDJS = new PDJSobj()

trigger = function () {
    // Trigger via the rest API
    PDJS.trigger({
        curl -H "Content-type: application/json" -X POST \
    -d '{    
      "service_key": "YOUR_SERVICE_KEY_HERE",
      "incident_key": "srv01/HTTP",
      "event_type": "trigger",
      "description": "FAILURE for production/HTTP on machine srv01.acme.com",
      "client": "Sample Monitoring Service",
      "client_url": "https://monitoring.service.com",
      "details": {
        "ping time": "1500ms",
        "load avg": 0.75
      },
      "contexts":[ 
        {
          "type": "link",
          "href": "http://acme.pagerduty.com"
        },{
          "type": "link",
          "href": "http://acme.pagerduty.com",
          "text": "View the incident on PagerDuty"
        },{
          "type": "image",
          "src": "https://chart.googleapis.com/chart?chs=600x400&chd=t:6,2,9,5,2,5,7,4,8,2,1&cht=lc&chds=a&chxt=y&chm=D,0033FF,0,0,5,1"
        },{
          "type": "image",
          "src": "https://chart.googleapis.com/chart?chs=600x400&chd=t:6,2,9,5,2,5,7,4,8,2,1&cht=lc&chds=a&chxt=y&chm=D,0033FF,0,0,5,1",
          "href": "https://google.com"
        }
      ]
    }' \
    "https://events.pagerduty.com/generic/2010-04-15/create_event.json"

    })
}</code>
</pre>

<p>The <strong>incident_key</strong> field may be any string, but it's a good idea to randomize this as much as possible.</p>
<p>Submitting multiple incidents for the same <strong>incident_key</strong> will result in the incident being triggered again. This event will be attached to the existing incident with this key and will alert via the service's escalation policy. Using an <strong>incident_key</strong> from a closed incident will result in a new incident being created.</p>

<p>To play with sample code, you can enter a service key on <a href="http://jsfiddle.net/PagerDuty/azh132ch/8/">JSFiddle</a> to manually trigger an incident. Open your browser's JavaScript console to view the API's response.</p>