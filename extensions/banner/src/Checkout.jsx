import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  useSettings,
  Button,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.header.render-after',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const {banner_title} =  useSettings();

  return (
    <Banner title={banner_title}>
      {translate('welcome', {target: extension.target})}
      	<Button
      onPress={() => {
        console.log('onPress event');
      }}
    >
      Pay now
    </Button>
    </Banner>
  );
}


// purchase.checkout.block.render For Render in checkout Page
// purchase.checkout.header.render-after For Renser in checkout page header