$(document).ready(function () {
    $('#addNew').click(function (e) {
        e.preventDefault();

        //$("#createForm").attr("action", "AddMetric");

        //$("#createForm").submit();

        var clone = $(document.getElementsByClassName("policiesNames")[0]).clone();
        $(".policies").append(clone);
    });
    $('#addNewCloud').click(function (e) {
        e.preventDefault();

        //$("#createForm").attr("action", "AddMetric");

        //$("#createForm").submit();

        var clone = $(document.getElementsByClassName("cloudMembers")[0]).clone();
        $(".clouds").append(clone);
    });

    $('#addNewSla').click(function (e) {
        e.preventDefault();

        //$("#createForm").attr("action", "AddMetric");

        //$("#createForm").submit();

        //var clone = $(document.getElementById("plan1")).clone();
        //$(".plans").append(clone);

        var count = $(".sla").length;
        var optionsClone = $(".sla1").clone();
        //$(optionsClone).find("select.plan1").removeClass("plan1").addClass("plan" + (count + 1)).attr("id", "Plans[" + count + "]__Name");
        $(".policiesSla").append($("<div>", { Class: "sla", Id: "sla" + (count + 1) }).append(optionsClone))

        $("#sla" + (count + 1)).find("select.sla1").removeClass("sla1").addClass("sla" + (count + 1)).attr("id", "TenantSLAPoliciesViewModel[" + count + "]__Id").attr("name", "TenantSLAPoliciesViewModel[" + count + "].Id");
        $("#sla" + (count + 1)).find("label.sla1").removeClass("sla1").addClass("sla" + (count + 1)).attr("id", "TenantSLAPoliciesViewModel[" + count + "]__Id").attr("name", "TenantSLAPoliciesViewModel[" + count + "].Id");
        $("#sla" + (count + 1)).find("input.sla1").removeClass("sla1").addClass("sla" + (count + 1)).attr("id", "TenantSLAPoliciesViewModel[" + count + "]__Value").attr("name", "TenantSLAPoliciesViewModel[" + count + "].Value");
        //$(".Plans").last().removeClass("plan1").addClass("plan" + count);
        $(".policiesSla").append($("<br/>"));
        //$(".plans").append($("<input>", { Class: "form-group plan" + count, type: "number" }));
    });

    $('#addNewPolicy').click(function (e) {
        e.preventDefault();

        //$("#createForm").attr("action", "AddMetric");

        //$("#createForm").submit();

        //var clone = $(document.getElementById("plan1")).clone();
        //$(".plans").append(clone);

        var count = $(".policy").length;
        var optionsClone = $(".policy1").clone();
        //$(optionsClone).find("select.plan1").removeClass("plan1").addClass("plan" + (count + 1)).attr("id", "Plans[" + count + "]__Name");
        $(".policies").append($("<div>", { Class: "policy", Id: "policy" + (count + 1) }).append(optionsClone))

        $("#policy" + (count + 1)).find("select.policy1").removeClass("policy1").addClass("policy" + (count + 1)).attr("id", "Metrics[" + count + "]__ID").attr("name", "Metrics[" + count + "].ID");
        $("#policy" + (count + 1)).find("label.policy1").removeClass("policy1").addClass("policy" + (count + 1)).attr("id", "Metrics[" + count + "]__ID").attr("name", "Metrics[" + count + "].ID");
        $("#policy" + (count + 1)).find("input.policy1").removeClass("policy1").addClass("policy" + (count + 1)).attr("id", "Metrics[" + count + "]__Value").attr("name", "Metrics[" + count + "].Value");
        //$(".Plans").last().removeClass("plan1").addClass("plan" + count);
        $(".policies").append($("<br/>"));
        //$(".plans").append($("<input>", { Class: "form-group plan" + count, type: "number" }));
    });

    $('#addNewPlan').click(function (e) {
        e.preventDefault();

        //$("#createForm").attr("action", "AddMetric");

        //$("#createForm").submit();

        //var clone = $(document.getElementById("plan1")).clone();
        //$(".plans").append(clone);

        var count = $(".plan").length;
        var optionsClone = $(".plan1").clone();
        //$(optionsClone).find("select.plan1").removeClass("plan1").addClass("plan" + (count + 1)).attr("id", "Plans[" + count + "]__Name");
        $(".plans").append($("<div>", { Class: "plan", Id: "plan" + (count + 1) }).append(optionsClone))

        $("#plan" + (count + 1)).find("select.plan1").removeClass("plan1").addClass("plan" + (count + 1)).attr("id", "Plans[" + count + "]__Id").attr("name", "Plans[" + count + "].Id");
        $("#plan" + (count + 1)).find("input.plan1").removeClass("plan1").addClass("plan" + (count + 1)).attr("id", "Plans[" + count + "]__Value").attr("name", "Plans[" + count + "].Value");
        //$(".Plans").last().removeClass("plan1").addClass("plan" + count);

        //$(".plans").append($("<input>", { Class: "form-group plan" + count, type: "number" }));
    });

    $('#addNewAccess').click(function (e) {
        e.preventDefault();

        //$("#createForm").attr("action", "AddMetric");

        //$("#createForm").submit();

        var clone = $(document.getElementsByClassName("accessPolicy")[0]).clone();
        $(".accessPolicies").append(clone);
    });

    $(".addressSpace").blur(function () {
        var value = $(this).val();

        var ipValue = value.split('/')[0];
        var ipRange = value.split('.');
        var lastVal = ipRange[3];

        var splits = value.split('/');

        var ipval = splits[0];

        if (ipval !== 0) {
            $(".addressSpaceRange").html("IP must end in 0");
        }

        var newIpValue = ipRange[0] + "." + ipRange[1] + "." + ipRange[2] + ".255";

        $(".addressSpaceRange").html(ipValue + " - " + newIpValue + " (256 addresses)");
    });

    $(".addressSubNetSpace").blur(function () {
        var value = $(this).val();

        var ipValue = value.split('/')[0];
        var ipRange = value.split('.');
        var lastVal = ipRange[3];

        var splits = value.split('/');

        var ipval = splits[0];

        if (ipval !== 0) {
            $(".addressSubNetSpaceRange").html("IP must end in 0");
        }

        var newIpValue = ipRange[0] + "." + ipRange[1] + "." + ipRange[2] + ".255";

        $(".addressSubNetSpaceRange").html(ipValue + " - " + newIpValue + " (256 addresses)");
    });

    $(".checking").on("click", function (e) {
        var $this = $(this);

        $(".checking").find("span.glyphicon-ok").remove();
        $(".checking").removeClass("active");
        $(this).addClass("active");
        $(this).append($("<span>", { Class: "glyphicon glyphicon-ok" }));

        e.stopPropagation();
    });
});