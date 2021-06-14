using Microsoft.AspNetCore.Html;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Example.Web.Infrastructure
{
    public class Bundler
    {
        private const string VirtualFolder = "wwwroot/";

        public static HtmlString Unpack(string baseFolder, string bundlePath)
        {
            var configFile = Path.Combine(baseFolder, "bundleconfig.json");
            var bundle = GetBundle(configFile, bundlePath);
            if (bundle == null)
                return null;

            // Clean up the bundle to remove the virtual folder that asp.net core provides.
            var inputFiles = bundle.InputFiles.Select(file => file.StartsWith(VirtualFolder) ? file.Substring(VirtualFolder.Length) : file);

            var outputString = bundlePath.EndsWith(".js") ?
                inputFiles.Select(inputFile => $"<script src='/{inputFile}' type='text/javascript'></script>") :
                inputFiles.Select(inputFile => $"<link rel='stylesheet' href='/{inputFile}' />");

            return new HtmlString(string.Join("\n", outputString));
        }

        private static Bundle GetBundle(string configFile, string bundlePath)
        {
            var file = new FileInfo(configFile);
            if (!file.Exists)
                return null;

            var bundles = JsonConvert.DeserializeObject<IEnumerable<Bundle>>(File.ReadAllText(configFile));
            return bundles.FirstOrDefault(b => b.OutputFileName.EndsWith(bundlePath, StringComparison.InvariantCultureIgnoreCase));
        }

        class Bundle
        {
            [JsonProperty("outputFileName")]
            public string OutputFileName { get; set; }

            [JsonProperty("inputFiles")]
            public List<string> InputFiles { get; set; } = new List<string>();
        }
    }
}
