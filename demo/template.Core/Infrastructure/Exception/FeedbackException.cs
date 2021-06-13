using System;

namespace template.Core
{
    public class FeedbackException : Exception
    {
        public string Info { get; }

        public FeedbackException() : base()
        {
        }
        public FeedbackException(string message) : base(message)
        {
        }
        public FeedbackException(string message, string info) : base(message)
        {
            Info = info;
        }
    }
}
