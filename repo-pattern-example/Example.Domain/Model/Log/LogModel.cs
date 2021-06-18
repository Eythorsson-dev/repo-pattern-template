using Example.Domain.Enum.Log;
using System;
using System.Collections.Generic;
using System.Text;

namespace Example.Domain.Model.Log
{
    public class LogModel : PagedModel
    {
        public long LogId { get; set; }
        public LogLevelEnum LogLevel { get; set; }
        public LogTypeEnum LogType { get; set; }
        public DateTime LogDate { get; set; }

        public string Message { get; set; }
        public string Stacktrace { get; set; }

        /// <summary>
        /// The Primary Key of item that is logged 
        /// </summary>
        public long ReferanceId { get; set; }
        /// <summary>
        /// The Primary Key Name of the item that is logged
        /// </summary>
        public string ReferanceName { get; set; }

        /// <summary>
        /// If name of the item that is logged
        /// </summary>
        public string ReferanceFriendlyName { get; set; }

        private LogModel() { }

        /// <param name="referanceId">The Primary Key of item that is logged </param>
        /// <param name="referanceName"> The Primary Key Name of the item that is logged</param>
        /// <param name="referanceFriendlyName">If name of the item that is logged</param>
        public LogModel(LogLevelEnum logLevel, LogTypeEnum logType, string message,
            string stacktrace = null, long referanceId = 0, string referanceName = null, string referanceFriendlyName = null, 
            DateTime? logDate = null)
        {
            if (logDate == null) logDate = DateTime.Now;

            LogLevel = logLevel;
            LogType = logType;
            LogDate = logDate.Value;
            Message = message;
            Stacktrace = stacktrace;
            ReferanceId = referanceId;
            ReferanceName = referanceName;
            ReferanceFriendlyName = referanceFriendlyName;
        }
    }
}
