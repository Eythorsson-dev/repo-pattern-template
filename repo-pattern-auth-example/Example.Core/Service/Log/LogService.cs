using Example.Core.Repository;
using Example.Core.Request.Log;
using Example.Domain;
using Example.Domain.Model.Log;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Example.Core.Service.Log
{
    public class LogService : BaseService
    {
        public LogService(IUnitOfWorkProvider uowProvider, RepositoryFactory repoFactory) : base(uowProvider, repoFactory)
        {
        }

        public PagedModel<LogModel> GetPagedList(LogFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.LogRepo(uow);
                return repo.GetPagedList(request);
            }
        }
        public List<LogModel> GetList(LogFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.LogRepo(uow);
                return repo.GetList(request);
            }
        }
        public async Task<List<LogModel>> GetListAsync(LogFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.LogRepo(uow);
                return await repo.GetListAsync(request, cancellationToken);
            }
        }
        public LogModel FirstOrDefault(LogFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.LogRepo(uow);
                return repo.FirstOrDefault(request);
            }
        }
        public async Task<LogModel> FirstOrDefaultAsync(LogFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.LogRepo(uow);
                return await repo.FirstOrDefaultAsync(request, cancellationToken);
            }
        }

        public LogModel SingleOrDefault(LogFilterRequest request)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.LogRepo(uow);
                return repo.SingleOrDefault(request);
            }
        }
        public async Task<LogModel> SingleOrDefaultAsync(LogFilterRequest request, CancellationToken cancellationToken)
        {
            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.LogRepo(uow);
                return await repo.SingleOrDefaultAsync(request, cancellationToken);
            }
        }

        public LogModel GetById(long logId)
        {
            var request = new LogFilterRequest { LogId = logId };
            return FirstOrDefault(request);
        }

        public long Insert(LogModel model)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.LogRepo(uow);
                model.LogId = repo.Insert(model);

                if (model.LogId < 1) throw new ArgumentException("Failed to insert the Log");
                return model.LogId;
            }
        }
        public async Task<long> InsertAsync(LogModel model, CancellationToken cancellationToken)
        {
            ValidateModel(model);

            using (IUnitOfWork uow = UowProvider.GetUnitOfWork()) {
                var repo = RepoFactory.LogRepo(uow);
                var id = await repo.InsertAsync(model, cancellationToken);

                if (id < 1) throw new ArgumentException("Failed to insert the Log");
                return id;
            }
        }


        public void ValidateModel(LogModel model)
        {
            if (model.LogLevel == 0) throw new ArgumentException("LogLevel is not set", "LogLevel");
            if (model.LogType == 0) throw new ArgumentException("LogType is not set", "LogType");

            if (model.LogDate == DateTime.MinValue) throw new ArgumentException("LogDate is not set", "LogDate");

            if (model.Message.Empty()) throw new FeedbackException("Message is not set", "Message");
        }
    }
}
