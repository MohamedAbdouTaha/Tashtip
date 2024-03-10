s>\n        ","Metadata":{"Common.PropertyName":"AppendVersion"}},{"Kind":"ITagHelper","Name":"asp-fallback-src-include","TypeName":"System.String","Documentation":"\n            <summary>\n            A comma separated list of globbed file patterns of JavaScript scripts to fallback to in the case the\n            primary one fails.\n            The glob patterns are assessed relative to the application's 'webroot' setting.\n            </summary>\n        ","Metadata":{"Common.PropertyName":"FallbackSrcInclude"}},{"Kind":"ITagHelper","Name":"asp-fallback-src-exclude","TypeName":"System.String","Documentation":"\n            <summary>\n            A comma separated list of globbed file patterns of JavaScript scripts to exclude from the fallback list, in\n            the case the primary one fails.\n            The glob patterns are assessed relative to the application's 'webroot' setting.\n            Must be used in conjunction with <see cref=\"P:Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper.FallbackSrcInclude\" />.\n            </summary>\n        ","Metadata":{"Common.PropertyName":"FallbackSrcExclude"}},{"Kind":"ITagHelper","Name":"asp-fallback-test","TypeName":"System.String","Documentation":"\n            <summary>\n            The script method defined in the primary script to use for the fallback test.\n            </summary>\n        ","Metadata":{"Common.PropertyName":"FallbackTestExpression"}}],"Metadata":{"Runtime.Name":"ITagHelper","Common.TypeName":"Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper","Common.TypeNamespace":"Microsoft.AspNetCore.Mvc.TagHelpers","Common.TypeNameIdentifier":"ScriptTagHelper"}},{"HashCode":-1304496591,"Kind":"ITagHelper","Name":"Microsoft.AspNetCore.Mvc.TagHelpers.SelectTagHelper","AssemblyName":"Microsoft.AspNetCore.Mvc.TagHelpers","Documentation":"\n            <summary>\n            <see cref=\"T:Microsoft.AspNetCore.Razor.TagHelpers.ITagHelper\" /> implementation targeting &lt;select&gt; elements with <c>asp-for</c> and/or\n            <c>asp-items</c> attribute(s).\n            </summary>\n        ","CaseSensitive":false,"TagMatchingRules":[{"TagName":"select","Attributes":[{"Name":"asp-for"}]},{"TagName":"select","Attributes":[{"Name":"asp-items"}]}],"BoundAttributes":[{"Kind":"ITagHelper","Name":"asp-for","TypeName":"Microsoft.AspNetCore.Mvc.ViewFeatures.ModelExpression","Documentation":"\n            <summary>\n            An expression to be evaluated against the current model.\n            </summary>\n        ","Metadata":{"Common.PropertyName":"For"}},{"Kind":"ITagHelper","Name":"asp-items","TypeName":"System.Collections.Generic.IEnumerable<Microsoft.AspNetCore.Mvc.Rendering.SelectListItem>","Documentation":"\n            <summary>\n            A collection of <see cref=\"T:Microsoft.AspNetCore.Mvc.Rendering.SelectListItem\" /> objects used to populate the &lt;select&gt; element with\n            &lt;optgroup&gt; and &lt;option&gt; elements.\n            </summary>\n        ","Metadata":{"Common.PropertyName":"Items"}},{"Kind":"ITagHelper","Name":"name","TypeName":"System.String","Documentation":"\n            <summary>\n            The name of the &lt;input&gt; element.\n            </summary>\n            <remarks>\n            Passed through to the generated HTML in all cases. Also used to determine whether <see cref=\"P:Microsoft.AspNetCore.Mvc.TagHelpers.SelectTagHelper.For\" /> is\n            valid with an empty <see cref=\"P:Microsoft.AspNetCore.Mvc.ViewFeatures.ModelExpression.Name\" />.\n            </remarks>\n        ","Metadata":{"Common.PropertyName":"Name"}}],"Metadata":{"Runtime.Name":"ITagHelper","Common.TypeName":"Microsoft.AspNetCore.Mvc.TagHelpers.SelectTagHelper","Common.TypeNamespace":"Microsoft.AspNetCore.Mvc.TagHelpers","Common.TypeNameIdentifier":"SelectTagHelper"}},{"HashCode":-1556932047,"Kind":"ITagHelper","Name":"Microsoft.AspNetCore.Mvc.TagHelpers.TextAreaTagHelper","AssemblyName":"Microsoft.AspNetCore.Mvc.TagHelpers","Documentation":"\n            <summary>\n            <see cref=\"T:Microsoft.AspNetCore.Razor.TagHelpers.ITagHelper\" /> implementation targeting &lt;textarea&gt; elements with an <c>asp-for</c> attribute.\n         