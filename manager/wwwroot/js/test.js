$(document).ready(function () {
    $('#addNew').click(function (e) {
        e.preventDefault();

        //$("#createForm").attr("action", "AddMetric");

        //$("#createForm").submit();

        var count = $(".metric").length;
        var parsedCount = parseInt(count);
        $('#metrics').append($("<h5>").append("Metric " + ++parsedCount)).append($('<div>', { Class: "metric", id: "metric" + count }));
        CreateField("metric", "UniqueId", count, "input");
        CreateField("metric", "Name", count, "input");
        $("#ServiceLevelAgreementMetrics_" + count + "__" + "Name").attr("type", "text");
        CreateField("metric", "Scale", count, "select");
        CreateOptionList(["Nominal", "Ordinal", "Interval", "Ratio"], count, "Scale");
        $('#metric' + count).append($("<div>", { Class: "form-group", id: "expression" + count }).append($("<h6>").append("Expression Details")));
        //$('#expression' + count).append($("<div>", { Class: "form-group" }).append($("<label>", { Class: "col-md-2 control-label" }).append("Metric")).append($("<div>", { Class: "col-md-10" }).append($("<input>", { Class: "form-control" }))));
        CreateSubModelField("expression", "Expression", "Metric", count, "input");
        CreateSubModelField("expression", "Expression", "Language", count, "input");
        CreateSubModelField("expression", "Expression", "Operator", count, "select");
        CreateOptionListForModel(["Add", "Subtract", "Multiply", "Divide", "GreaterThan", "LessThan"], count, "Operator", "Expression");
        //add parameters div
        var count2 = $("#parameters" + count).children(".parameter").length;

        $('#metric' + count).append($("<div>", { Class: "form-group" }).css("margin-left", "50px").append($("<div>", { id: "parameters" + count })).append($("<div>").append($("<button>", { Class: "addParameter btn btn-success" }).append("Add Parameter"))));
        //CreateSubModelListField("parameter", "Parameters", "Name", count, "input", count2);
    });
    //This will be used for sub list in dynamic metric list
    $(document).on("click", "button.addParameter", function (e) {
        e.preventDefault();
        var count = $(this).parent().parent().parent().attr("id").match(/\d+/);
        var count2 = $("#parameters" + count).children(".parameter").length;
        var parsedCount = parseInt(count2);
        $('#parameters' + count).append($("<div>", { Class: "parameter form-group", id: "pars" + count + "_" + "parameter" + parsedCount }).append($("<h6>").append("Parameter" + count2)));
        CreateSubModelListField("parameter", "Parameters", "Name", count, "input", count2);
        CreateSubModelListField("parameter", "Parameters", "Type", count, "select", count2);
        CreateOptionListForSubModel(["Integer", "Decimal", "String", "Boolean", "Byte"], count, "Type", "Parameters", count2);
        CreateSubModelListField("parameter", "Parameters", "Value", count, "input", count2);
    });
});

function CreateOptionList(arrayValues, count, fieldName) {
    var counter = 1;
    for (var val in arrayValues) {
        $("#ServiceLevelAgreementMetrics_" + count + "__" + fieldName).append($("<option>", { value: counter }).append(arrayValues[val]));
        counter++;
    }
}

function CreateOptionListForModel(arrayValues, count, fieldName, modelName) {
    var counter = 1;
    for (var val in arrayValues) {
        $("#ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + fieldName).append($("<option>", { value: counter }).append(arrayValues[val]));
        counter++;
    }
}

function CreateOptionListForSubModel(arrayValues, count, fieldName, modelName, count2) {
    var counter = 1;
    for (var val in arrayValues) {
        $("#ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + count2 + "__" + fieldName).append($("<option>", { value: counter }).append(arrayValues[val]));
        counter++;
    }
}

function CreateField(parentName, fieldName, count, fieldTag) {
    $('#' + parentName + count).append(
        $("<div>", { Class: "form-group" }).append(
        $("<label>", { Class: "col-md-2 control-label", For: "ServiceLevelAgreementMetrics_" + count + "__" + fieldName }).append(fieldName)).append(
        $("<div>", { Class: "col-md-10" }).append(
        $("<" + fieldTag + ">", { Class: "form-control metricRow", id: "ServiceLevelAgreementMetrics_" + count + "__" + fieldName, name: "ServiceLevelAgreementMetrics[" + count + "]." + fieldName })).append(
        $("<span>", { Class: "text-danger field-validation-valid", id: "errorText_" + fieldName + "_" + count }))));

    $("#ServiceLevelAgreementMetrics_" + count + "__" + fieldName).attr("data-val", "true");
    $("#ServiceLevelAgreementMetrics_" + count + "__" + fieldName).attr("data-val-required", "The " + fieldName + "is required.");
    $("#ServiceLevelAgreementMetrics_" + count + "__" + fieldName).attr("aria-required", "true");
    $("#ServiceLevelAgreementMetrics_" + count + "__" + fieldName).attr("aria-invalid", "false");
    $("#ServiceLevelAgreementMetrics_" + count + "__" + fieldName).attr("aria-describedby", "ServiceLevelAgreementMetrics_" + count + "__" + fieldName + "-error");
    $("#errorText_" + fieldName + "_" + count).attr("data-valmsg-for", "ServiceLevelAgreementMetrics[" + count + "]." + fieldName);
    $("#errorText_" + fieldName + "_" + count).attr("data-valmsg-replace", "true");
}

function CreateSubModelField(parentName, modelName, fieldName, count, fieldTag) {
    $('#' + parentName + count).append(
        $("<div>", { Class: "form-group" }).append(
        $("<label>", { Class: "col-md-2 control-label", For: "ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + fieldName }).append(fieldName)).append(
        $("<div>", { Class: "col-md-10" }).append(
        $("<" + fieldTag + ">", { Class: "form-control metricRow", id: "ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + fieldName, name: "ServiceLevelAgreementMetrics[" + count + "]." + modelName + "." + fieldName })).append(
        $("<span>", { Class: "text-danger field-validation-valid", id: "errorText_" + modelName + "_" + fieldName + "_" + count }))));

    $("#ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + fieldName).attr("data-val", "true");
    $("#ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + fieldName).attr("data-val-required", "The " + fieldName + "is required.");
    $("#ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + fieldName).attr("aria-required", "true");
    $("#ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + fieldName).attr("aria-invalid", "false");
    $("#ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + fieldName).attr("aria-describedby", "ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + fieldName + "-error");
    $("#errorText_" + modelName + "_" + fieldName + "_" + count).attr("data-valmsg-for", "ServiceLevelAgreementMetrics[" + count + "]." + modelName + "." + fieldName);
    $("#errorText_" + modelName + "_" + fieldName + "_" + count).attr("data-valmsg-replace", "true");
}

function CreateSubModelListField(parentName, modelName, fieldName, count, fieldTag, count2) {
    $('#pars' + count + "_" + parentName + count2).append(
        $("<div>", { Class: "form-group" }).append(
        $("<label>", { Class: "col-md-2 control-label", For: "ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + count2 + "__" + fieldName }).append(fieldName)).append(
        $("<div>", { Class: "col-md-10" }).append(
        $("<" + fieldTag + ">", { Class: "form-control metricRow", id: "ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + count2 + "__" + fieldName, name: "ServiceLevelAgreementMetrics[" + count + "]." + modelName + "[" + count2 + "]" + "." + fieldName })).append(
        $("<span>", { Class: "text-danger field-validation-valid", id: "errorText_" + modelName + "_" + count2 + "__" + fieldName + "_" + count }))));

    $("#ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + count2 + "__" + fieldName).attr("data-val", "true");
    $("#ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + count2 + "__" + fieldName).attr("data-val-required", "The " + fieldName + "is required.");
    $("#ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + count2 + "__" + fieldName).attr("aria-required", "true");
    $("#ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + count2 + "__" + fieldName).attr("aria-invalid", "false");
    $("#ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + count2 + "__" + fieldName).attr("aria-describedby", "ServiceLevelAgreementMetrics_" + count + "__" + modelName + "_" + count2 + "__" + fieldName + "-error");
    $("#errorText_" + modelName + "_" + count2 + "__" + fieldName + "_" + count).attr("data-valmsg-for", "ServiceLevelAgreementMetrics[" + count + "]." + modelName + "[" + count2 + "]" + "." + fieldName);
    $("#errorText_" + modelName + "_" + count2 + "__" + fieldName + "_" + count).attr("data-valmsg-replace", "true");
}