using System;
using Android.App;
using Android.OS;
using Android.Runtime;
using Android.Views;
using AndroidX.AppCompat.Widget;
using AndroidX.AppCompat.App;
using Huawei.Agconnect.Appmessaging;
using Huawei.Agconnect.Appmessaging.Model;
using Huawei.Hms.Aaid;
using Huawei.Hms.Aaid.Entity;
using System.Threading.Tasks;
using Android.Widget;


namespace XamarinAppMessagingCodelab
{
    [Activity(Label = "@string/app_name", Theme = "@style/AppTheme.NoActionBar", MainLauncher = true)]
    public class MainActivity : AppCompatActivity
    {
        private TextView txtResult;

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            Xamarin.Essentials.Platform.Init(this, savedInstanceState);
            SetContentView(Resource.Layout.activity_main);

            txtResult = FindViewById<TextView>(Resource.Id.txtId);

            GetAAID();

            AGConnectAppMessaging.Instance.SetForceFetch();



        }
        public async void GetAAID()
        {
            HmsInstanceId hmsInstanceId = HmsInstanceId.GetInstance(this);
            Task<AAIDResult> idTask = hmsInstanceId.GetAAIDAsync();
            var result = await idTask;
            if (idTask.IsCompleted && idTask.Result != null)
            {
                txtResult.Text = "Your Id: " + result.Id;
                Console.WriteLine("AAID retrieved successfully: " + result.Id);
            }
            else
            {
                Console.WriteLine("AAID retrieved failed: " + idTask.Result);
            }
        }

    }
}
