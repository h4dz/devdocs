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
    // Trigger via the REST API
    PDJS.trigger({
        // Enter your service key 
        service_key: "YOUR_SERVICE_KEY_HERE",
        description: "This is only a test.",
        // A random incident key
        incident_key: "manual_incident_" + Math.random(),
        details: {
            page: "This is only a test."
        },
        // Capture anything sent back to us
        success: function (json) {
            console.log(json)
        }
    })
}</code>
</pre>

<p>The <strong>incident_key</strong> field may be any string, but it's a good idea to randomize this as much as possible.</p>
<p>Submitting multiple incidents for the same <strong>incident_key</strong> will result in the incident being triggered again. This event will be attached to the existing incident with this key and will alert via the service's escalation policy. Using an <strong>incident_key</strong> from a closed incident will result in a new incident being created.</p>

<p>To play with sample code, you can enter a service key on <a href="http://jsfiddle.net/PagerDuty/azh132ch/1/">JSFiddle</a> to manually trigger an incident. Open your browser's JavaScript console to view the API's response.</p>