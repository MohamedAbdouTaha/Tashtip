or"}]}],"BoundAttributes":[{"Kind":"ITagHelper","Name":"asp-for","TypeName":"Microsoft.AspNetCore.Mvc.ViewFeatures.ModelExpression","Documentation":"\n            <summary>\n            An expression to be evaluated against the current model.\n            </summary>\n        ","Metadata":{"Common.PropertyName":"For"}}],"Metadata":{"Runtime.Name":"ITagHelper","Common.TypeName":"Microsoft.AspNetCore.Mvc.TagHelpers.LabelTagHelper","Common.TypeNamespace":"Microsoft.AspNetCore.Mvc.TagHelpers","Common.TypeNameIdentifier":"LabelTagHelper"}},{"HashCode":-195469401,"Kind":"ITagHelper","Name":"Microsoft.AspNetCore.Mvc.TagHelpers.LinkTagHelper","AssemblyName":"Microsoft.AspNetCore.Mvc.TagHelpers","Documentation":"\n            <summary>\n            <see cref=\"T:Microsoft.AspNetCore.Razor.TagHelpers.ITagHelper\" /> implementation targeting &lt;link&gt; elements that supports fallback href paths.\n            </summary>\n            <remarks>\n            The tag helper won't process for cases with just the 'href' attribute.\n            </remarks>\n        ","CaseSensitive":false,"TagMatchingRules":[{"TagName":"link","TagStructure":2,"Attributes":[{"Name":"asp-href-include"}]},{"TagName":"link","TagStructure":2,"Attributes":[{"Name":"asp-href-exclude"}]},{"TagName":"link","TagStructure":2,"Attributes":[{"Name":"asp-fallback-href"}]},{"TagName":"link","TagStructure":2,"Attributes":[{"Name":"asp-fallback-href-include"}]},{"TagName":"link","TagStructure":2,"Attributes":[{"Name":"asp-fallback-href-exclude"}]},{"TagName":"link","TagStructure":2,"Attributes":[{"Name":"asp-fallback-test-class"}]},{"TagName":"link","TagStructure":2,"Attributes":[{"Name":"asp-fallback-test-property"}]},{"TagName":"link","TagStructure":2,"Attributes":[{"Name":"asp-fallback-test-value"}]},{"TagName":"link","TagStructure":2,"Attributes":[{"Name":"asp-append-version"}]}],"BoundAttributes":[{"Kind":"ITagHelper","Name":"href","TypeName":"System.String","Documentation":"\n            <summary>\n            Address of the linked resource.\n            </summary>\n            <remarks>\n            Passed through to the generated HTML in all cases.\n            </remarks>\n        ","Metadata":{"Common.PropertyName":"Href"}},{"Kind":"ITagHelper","Name":"asp-href-include","TypeName":"System.String","Documentation":"\n            <summary>\n            A comma separated list of globbed file patterns of CSS stylesheets to load.\n            The glob patterns are assessed relative to the application's 'webroot' setting.\n            </summary>\n        ","Metadata":{"Common.PropertyName":"HrefInclude"}},{"Kind":"ITagHelper","Name":"asp-href-exclude","TypeName":"System.String","Documentation":"\n            <summary>\n            A comma separated list of globbed file patterns of CSS stylesheets to exclude from loading.\n            The glob patterns are assessed relative to the application's 'webroot' setting.\n            Must be used in conjunction with <see cref=\"P:Microsoft.AspNetCore.Mvc.TagHelpers.LinkTagHelper.HrefInclude\" />.\n            </summary>\n        ","Metadata":{"Common.PropertyName":"HrefExclude"}},{"Kind":"ITagHelper","Name":"asp-fallback-href","TypeName":"System.String","Documentation":"\n            <summary>\n            The URL of a CSS stylesheet to fallback to in the case the primary one fails.\n            </summary>\n        ","Metadata":{"Common.PropertyName":"FallbackHref"}},{"Kind":"ITagHelper","Name":"asp-suppress-fallback-integrity","TypeName":"System.Boolean","Documentation":"\n            <summary>\n            Boolean value that determines if an integrity hash will be compared with <see cref=\"P:Microsoft.AspNetCore.Mvc.TagHelpers.LinkTagHelper.FallbackHref\" /> value.\n            </summary>\n        ","Metadata":{"Common.PropertyName":"SuppressFallbackIntegrity"}},{"Kind":"ITagHelper","Name":"asp-append-version","TypeName":"System.Boolean?","Documentation":"\n            <summary>\n            Value indicating if file version should be appended to the href urls.\n            </summary>\n            <remarks>\n            If <c>true</c> then a query string \"v\" with the encoded content of the file is added.\n            </remarks>\n        ","Metadata":{"Common.Proper